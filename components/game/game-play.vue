<template>
  <div class="game-play" ref="gaming">
    <!-- 游戏开始前 - 新手提示 -->
    <div class="game-play-before" v-if="gameStatus === 1" @click="startGame">
      <div class="ol-before">
        <img src="./img/before-game.png" class="before-msg" />
        <img src="./img/before-swipe.png" class="before-hand" />
      </div>
    </div>
    <!-- 游戏中 - 其他信息 -->
    <div class="game-play-msg" v-if="gameStatus === 2">
      <div class="score-and-time">
        <div class="msg-score">
          <img src="./img/play1.png" />
          <span class="content">{{gameScore}}</span>
        </div>
        <div class="msg-time">
          <img src="./img/play2.png" />
          <span class="content">{{Math.ceil(leftTime / 1000)}}s</span>
        </div>
      </div>
    </div>

    <!-- 游戏中 - 游戏操作板块 -->
    <div class="game-play-block" v-show="gameStatus === 2">
      <div
        class="get-one-score"
        v-show="getOneScore"
        :style="{
          'position': 'absolute',
          'width': `${boxWidth}px`,
          'left': `${mx - boxWidth / 2}px`,
          'bottom': `${getScoreHeight + 20}px`,
        }"
      >
        <img src="./img/score1.png" v-if="getOneScore === 300" />
        <img src="./img/score2.png" v-else-if="getOneScore === 200" />
        <img src="./img/score3.png" v-else-if="getOneScore === 100" />
        <img src="./img/score4.png" v-else-if="getOneScore < 0" />
      </div>
      <canvas class="game-canvas" id="canvas1" ref="canvas1" :width="gameWidth" :height="gameHeight"></canvas>
      <canvas class="game-canvas" id="canvas2" ref="canvas2" :width="gameWidth" :height="gameHeight"></canvas>
    </div>

    <!-- 游戏结束 -->
    <div class="game-play-over" v-if="gameStatus === 3">
      游戏结束
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from "vuex";
import { cloneDeep } from 'lodash';
import boxObj from './box.js';
import dropObj from './drop.js';
// 图片资源
import box from './img/box.png'
import drop1 from './img/drop1.png'
import drop2 from './img/drop2.png'
import drop3 from './img/drop3.png'
import drop0 from './img/drop0.png'

let gameTimeInterval,
  gameInterval;

export default {
  data() {
    return {
      leftTime: 15000,
      gameScore: 0,
      showGameScore: 0,
      // 游戏中参数
      gameWidth: 0,
      gameHeight: 0,
      gaming: null,
      can1: null,
      can2: null,
      ctx1: null,
      ctx2: null,
      mx: 0,
      my: 0,
      box: null,
      boxWidth: 70,
      boxHeight: 68,
      dropList: [],
      dropWidth: 30,
      dropHeight: 55.6,
      getScoreHeight: 100,
      getOneScore: 0,
      picList: [box, drop1, drop2, drop3, drop0],
    };
  },
  computed: {
    ...mapState({
      gameStatus: state => state.game.gameStatus,
      gameDropList: state => state.game.gameDropList,
    }),
  },
  watch: {
    gameStatus() {
      const vm = this;
      if (vm.gameStatus === 2) {
        console.log('游戏正式开始');
        vm.handleStartGame();
      } else if (vm.gameStatus === 3) {
        console.log('游戏结束');
        vm.clearCanvas();
        vm.box = null;
        vm.dropList = [];
      }
    },
    leftTime() {
      const vm = this;
      if (vm.leftTime <= 0) {
        clearInterval(gameTimeInterval);
        clearInterval(gameInterval);
        vm.$store.commit('game/setGameStatus', 3);
        vm.showGameScore = cloneDeep(vm.gameScore);

        // 游戏结束
        vm.handleGameEnd();
      }
    },
  },
  methods: {
    startGame() {
      const vm = this;
      console.log('请求开始成功');
      // 此处模拟填入掉落物体类型及顺序！
      const gameData = {
        game: 'yyttjjyyzjyyjzyjzyjtjzytjzztjy', // 可随意修改ytjz和顺序
      };
      // 记录本次游戏掉落顺序数组
      vm.$store.commit('game/setGameDropList', gameData.game || []);
      // 切换gameStatus
      vm.$store.commit('game/setGameStatus', 2);
    },
    handleStartGame() {
      const vm = this;
      vm.init();
      vm.gameloop();
      gameTimeInterval = setInterval(() => {
        if (vm.leftTime > 0) {
          const dropIndex = parseInt((15000 - vm.leftTime) / 500);
          const dropSign = vm.gameDropList[dropIndex];
          const type = vm.getRandomType(dropSign);
          vm.dropList.push(new dropObj(Number(type), vm.picList[Number(type)], vm.getScoreHeight));

          vm.leftTime -= 500;
        }
      }, 500);
    },
    getRandomType(dropSign) {
      switch (dropSign) {
        case 'y': return 1; break; // 金币
        case 't': return 2; break; // 银币
        case 'z': return 3; break; // 铜币
        case 'j': return 4; break; // 炸弹
        default: return 4; break; // 炸弹
      }
      return 4;
    },
    init() {
      const vm = this;

      vm.gameWidth = document.body.clientWidth;
      vm.gameHeight = document.body.clientHeight;
      vm.mx = document.body.clientWidth / 2;
      // 接收触屏操作
      vm.gaming = vm.$refs.gaming;
      // 用于绘制箱子
      vm.can1 = vm.$refs.canvas1;
      vm.ctx1 = vm.can1.getContext('2d');
      // 用于绘制掉落
      vm.can2 = vm.$refs.canvas2;
      vm.ctx2 = vm.can2.getContext('2d');

      // 监听触屏滑动
      vm.gaming.addEventListener('touchmove', vm.onTouchMove, false);

      // 初始化箱子
      vm.box = new boxObj(vm.picList[0], vm.getScoreHeight);
    },
    gameloop() {
      const vm = this;
      if (vm.gameStatus === 2) {
        // 每帧循环
        window.requestAnimationFrame(vm.gameloop);
        // canvas1是部分透明的，覆盖在canvas2上，绘制新的之前把前一帧的内容清空，从（0,0）到canvas的对角线清除掉，在干净的画布上绘制
        vm.clearCanvas();
        // 绘制箱子
        vm.box.draw(vm.ctx1, vm.mx, vm.boxWidth, vm.boxHeight);
        // 绘制掉落
        vm.dropList.map((item, index) => {
          if (item.show) {
            const getScore = item.draw(vm.ctx2, vm.dropWidth, vm.dropHeight, vm.boxWidth, vm.mx);
            // 获取到分数后
            if (getScore) {
              // 显示当前获取的正负分数
              vm.getOneScore = cloneDeep(getScore);
              setTimeout(() => {
                if (vm.getOneScore) {
                  vm.getOneScore = 0;
                }
              }, 300);

              // 加减分（可以为负）
              vm.gameScore += getScore;
            }
          }
        });
      }
    },
    clearCanvas() {
      const vm = this;
      vm.ctx1.clearRect(0, 0, vm.can1.width, vm.can1.height);
      vm.ctx2.clearRect(0, 0, vm.can2.width, vm.can2.height);
    },
    onTouchMove(e) {
      const vm = this;
      if (vm.gameStatus === 2) {
        // 只有当gameStatus是2状态下（游戏中），玩家才能控制触屏操控
        if (e.touches && e.touches[0]) {
          if (e.touches[0].clientX > document.body.clientWidth) {
            vm.mx = document.body.clientWidth;
          } else if (e.touches[0].clientX < 0) {
            vm.mx = 0;
          } else {
            vm.mx = e.touches[0].clientX;
          }
        }
      }
    },
    handleGameEnd() {
      // 重置游戏时间和分数
      this.leftTime = 15000;
      this.gameScore = 0;
    },
  },
};
</script>

<style lang="less">
.game-play {
  width: 100%;
  height: 100%;
  background: url("./img/gaming-bg.jpg") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .game-play-before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url("./img/before-game-bg.jpg") no-repeat;
    background-size: 100% 100%;
    .ol-before {
      position: absolute;
      z-index: 11;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(1, 55, 86, 0.8);
      .before-msg {
        width: 80vw;
        position: absolute;
        top: 35vw;
        left: 50%;
        transform: translateX(-50%);
      }
      .before-hand {
        width: 19vw;
        position: absolute;
        top: 70vw;
        left: 50%;
        transform: translateX(-50%);
        animation: handSwipe 2s infinite linear;
      }
    }
  }
  .game-play-msg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 6;
    top: 0px;
    left: 0px;
    .score-and-time {
      position: absolute;
      top: 16px;
      left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      .msg-score {
        position: relative;
        margin-right: 7px;
        img {
          display: block;
          height: 33px;
        }
        span {
          display: block;
          width: 100%;
          height: 33px;
          line-height: 30px;
          font-size: 15px;
          color: #ffe039;
          position: absolute;
          top: 0px;
          left: 0px;
          text-align: left;
          padding-left: 32px;
        }
      }
      .msg-time {
        position: relative;
        img {
          display: block;
          height: 33px;
        }
        span {
          display: block;
          width: 100%;
          height: 33px;
          line-height: 30px;
          font-size: 15px;
          color: #ffe039;
          position: absolute;
          top: 0px;
          left: 0px;
          text-align: left;
          padding-left: 34px;
        }
      }
    }
    .music-handle {
      position: absolute;
      top: 19px;
      right: 22px;
      font-size: 25px;
      color: #fff;
      &.icon-yinlekai {
        transform-origin: center center;
        animation: musicRotate 3s infinite linear;
      }
    }
  }
  .game-play-block {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9;
    .get-one-score {
      display: flex;
      justify-content: center;
      img {
        display: block;
        width: 75px;
      }
    }
    .game-canvas {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      zoom: 0.5;
      #canvas1 {
        z-index: 1;
      }
      #canvas2 {
        z-index: 2;
      }
    }
  }

  .game-play-over {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(1, 55, 86, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;
  }
}

@keyframes handSwipe {
  from {
    transform: translateX(-50%);
  }
  25% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(-50%);
  }
}

// @keyframes musicRotate {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
</style>
