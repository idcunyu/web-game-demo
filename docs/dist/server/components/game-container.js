exports.ids = [2,1,3,4];
exports.modules = Array(25).concat([
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1af2fe90", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 盒子
const boxObj = function (imgSrc, getScoreHeight) {
  this.boxBody = new Image();
  this.boxBody.src = imgSrc;
  this.x = 0;
  this.y = document.body.clientHeight - getScoreHeight;
};

boxObj.prototype = {
  draw(ctx1, mx, boxWidth, boxHeight) {
    if (mx < boxWidth / 2) {
      this.x = 0;
    } else if (mx > document.body.clientWidth - boxWidth / 2) {
      this.x = document.body.clientWidth - boxWidth;
    } else {
      this.x = mx - boxWidth / 2;
    }

    ctx1.save();
    ctx1.drawImage(this.boxBody, this.x, this.y, boxWidth, boxHeight);
    ctx1.restore();
  }

};
/* harmony default export */ __webpack_exports__["default"] = (boxObj);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 掉落
const dropObj = function (type, imgSrc, getScoreHeight) {
  // type: 1：金币，2：银币，3：铜币，4：炸弹
  this.dropBody = new Image();
  this.dropBody.src = imgSrc;
  this.x = Math.floor(Math.random() * (document.body.clientWidth - 30));
  this.y = -100;
  this.speed = Math.floor(Math.random() * 2) + 3;
  this.type = type;
  this.count = 0;
  this.score = 0;
  this.show = 1;
  this.moving = 1;
  this.isScored = 0;
  this.getScoreHeight = getScoreHeight + 30;

  switch (type) {
    case 1:
      this.score = 300;
      break;

    case 2:
      this.score = 200;
      break;

    case 3:
      this.score = 100;
      break;

    case 4:
      this.score = -150;
      break;

    default:
      this.score = 0;
      break;
  }
};

dropObj.prototype = {
  init(ctx2, dropWidth, dropHeight) {
    ctx2.drawImage(this.dropBody, this.x, this.y, dropWidth, dropHeight);
  },

  draw(ctx2, dropWidth, dropHeight, boxWidth, mx) {
    if (this.show && this.moving && !this.isScored && document.body.clientHeight - this.y < this.getScoreHeight && document.body.clientHeight - this.y > this.getScoreHeight - 20 && this.x >= mx - boxWidth / 2 && this.x + dropWidth <= mx + boxWidth / 2) {
      this.show = 0;
      this.moving = 1;
      this.isScored = 1;
      return this.score;
    } else if (this.show && this.moving && !this.isScored && document.body.clientHeight - this.y <= 0) {
      this.show = 0;
      this.moving = 0;
      return 0;
    } else if (!this.moving && document.body.clientHeight - this.y <= this.getScoreHeight - 20 && document.body.clientHeight - this.y > 0) {
      this.moving = 0;
      return 0;
    }

    this.y = this.speed * this.count;
    this.count++;
    ctx2.save();
    ctx2.drawImage(this.dropBody, this.x, this.y, dropWidth, dropHeight);
    ctx2.restore();
    return 0;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (dropObj);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/game/game-play.vue?vue&type=template&id=56036bd1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"gaming",staticClass:"game-play"},[_vm._ssrNode(((_vm.gameStatus === 1)?("<div class=\"game-play-before\"><div class=\"ol-before\"><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" class=\"before-msg\"> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" class=\"before-hand\"></div></div>"):"<!---->")+" "+((_vm.gameStatus === 2)?("<div class=\"game-play-msg\"><div class=\"score-and-time\"><div class=\"msg-score\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+"> <span class=\"content\">"+_vm._ssrEscape(_vm._s(_vm.gameScore))+"</span></div> <div class=\"msg-time\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+"> <span class=\"content\">"+_vm._ssrEscape(_vm._s(Math.ceil(_vm.leftTime / 1000))+"s")+"</span></div></div></div>"):"<!---->")+" <div class=\"game-play-block\""+(_vm._ssrStyle(null,null, { display: (_vm.gameStatus === 2) ? '' : 'none' }))+"><div class=\"get-one-score\""+(_vm._ssrStyle(null,{
        'position': 'absolute',
        'width': (_vm.boxWidth + "px"),
        'left': ((_vm.mx - _vm.boxWidth / 2) + "px"),
        'bottom': ((_vm.getScoreHeight + 20) + "px"),
      }, { display: (_vm.getOneScore) ? '' : 'none' }))+">"+((_vm.getOneScore === 300)?("<img"+(_vm._ssrAttr("src",__webpack_require__(34)))+">"):(_vm.getOneScore === 200)?("<img"+(_vm._ssrAttr("src",__webpack_require__(35)))+">"):(_vm.getOneScore === 100)?("<img"+(_vm._ssrAttr("src",__webpack_require__(36)))+">"):(_vm.getOneScore < 0)?("<img"+(_vm._ssrAttr("src",__webpack_require__(37)))+">"):"<!---->")+"</div> <canvas id=\"canvas1\""+(_vm._ssrAttr("width",_vm.gameWidth))+(_vm._ssrAttr("height",_vm.gameHeight))+" class=\"game-canvas\"></canvas> <canvas id=\"canvas2\""+(_vm._ssrAttr("width",_vm.gameWidth))+(_vm._ssrAttr("height",_vm.gameHeight))+" class=\"game-canvas\"></canvas></div> "+((_vm.gameStatus === 3)?("<div class=\"game-play-over\">\n    游戏结束\n  </div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/game/game-play.vue?vue&type=template&id=56036bd1&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(24);

// EXTERNAL MODULE: ./components/game/box.js
var box = __webpack_require__(27);

// EXTERNAL MODULE: ./components/game/drop.js
var drop = __webpack_require__(28);

// EXTERNAL MODULE: ./components/game/img/box.png
var img_box = __webpack_require__(38);
var box_default = /*#__PURE__*/__webpack_require__.n(img_box);

// EXTERNAL MODULE: ./components/game/img/drop1.png
var drop1 = __webpack_require__(39);
var drop1_default = /*#__PURE__*/__webpack_require__.n(drop1);

// EXTERNAL MODULE: ./components/game/img/drop2.png
var drop2 = __webpack_require__(40);
var drop2_default = /*#__PURE__*/__webpack_require__.n(drop2);

// EXTERNAL MODULE: ./components/game/img/drop3.png
var drop3 = __webpack_require__(41);
var drop3_default = /*#__PURE__*/__webpack_require__.n(drop3);

// EXTERNAL MODULE: ./components/game/img/drop0.png
var drop0 = __webpack_require__(42);
var drop0_default = /*#__PURE__*/__webpack_require__.n(drop0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/game/game-play.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// eslint-disable-next-line



 // 图片资源






let gameTimeInterval, gameInterval;
/* harmony default export */ var game_playvue_type_script_lang_js_ = ({
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
      picList: [box_default.a, drop1_default.a, drop2_default.a, drop3_default.a, drop0_default.a]
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      gameStatus: state => state.game.gameStatus,
      gameDropList: state => state.game.gameDropList
    })
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
        vm.showGameScore = Object(external_lodash_["cloneDeep"])(vm.gameScore); // 游戏结束

        vm.handleGameEnd();
      }
    }

  },
  methods: {
    startGame() {
      const vm = this;
      console.log('请求开始成功'); // 此处模拟填入掉落物体类型及顺序！

      const gameData = {
        game: 'yyttjjyyzjyyjzyjzyjtjzytjzztjy' // 可随意修改ytjz和顺序

      }; // 记录本次游戏掉落顺序数组

      vm.$store.commit('game/setGameDropList', gameData.game || []); // 切换gameStatus

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
          vm.dropList.push(new drop["default"](Number(type), vm.picList[Number(type)], vm.getScoreHeight));
          vm.leftTime -= 500;
        }
      }, 500);
    },

    getRandomType(dropSign) {
      switch (dropSign) {
        case 'y':
          return 1;
          break;
        // 金币

        case 't':
          return 2;
          break;
        // 银币

        case 'z':
          return 3;
          break;
        // 铜币

        case 'j':
          return 4;
          break;
        // 炸弹

        default:
          return 4;
          break;
        // 炸弹
      }

      return 4;
    },

    init() {
      const vm = this;
      vm.gameWidth = document.body.clientWidth;
      vm.gameHeight = document.body.clientHeight;
      vm.mx = document.body.clientWidth / 2; // 接收触屏操作

      vm.gaming = vm.$refs.gaming; // 用于绘制箱子

      vm.can1 = vm.$refs.canvas1;
      vm.ctx1 = vm.can1.getContext('2d'); // 用于绘制掉落

      vm.can2 = vm.$refs.canvas2;
      vm.ctx2 = vm.can2.getContext('2d'); // 监听触屏滑动

      vm.gaming.addEventListener('touchmove', vm.onTouchMove, false); // 初始化箱子

      vm.box = new box["default"](vm.picList[0], vm.getScoreHeight);
    },

    gameloop() {
      const vm = this;

      if (vm.gameStatus === 2) {
        // 每帧循环
        window.requestAnimationFrame(vm.gameloop); // canvas1是部分透明的，覆盖在canvas2上，绘制新的之前把前一帧的内容清空，从（0,0）到canvas的对角线清除掉，在干净的画布上绘制

        vm.clearCanvas(); // 绘制箱子

        vm.box.draw(vm.ctx1, vm.mx, vm.boxWidth, vm.boxHeight); // 绘制掉落

        vm.dropList.map((item, index) => {
          if (item.show) {
            const getScore = item.draw(vm.ctx2, vm.dropWidth, vm.dropHeight, vm.boxWidth, vm.mx); // 获取到分数后

            if (getScore) {
              // 显示当前获取的正负分数
              vm.getOneScore = Object(external_lodash_["cloneDeep"])(getScore);
              setTimeout(() => {
                if (vm.getOneScore) {
                  vm.getOneScore = 0;
                }
              }, 300); // 加减分（可以为负）

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
    }

  }
});
// CONCATENATED MODULE: ./components/game/game-play.vue?vue&type=script&lang=js&
 /* harmony default export */ var game_game_playvue_type_script_lang_js_ = (game_playvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/game/game-play.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  game_game_playvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ba8ef196"
  
)

/* harmony default export */ var game_play = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/before-game.8323dfc.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/before-swipe.56e4f3a.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play1.b3b4c02.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/play2.0d6d260.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAZCAMAAABO1iMkAAAAZlBMVEUAAAAQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQH/7EoQAQGmly3VxDxsXxm+rjWZiiiyojFbThPr2UPgzkAwIgb14keLfSRHOg3KuTh8bx/jZitjAAAAEXRSTlMAgcBAGo5QIu1c8+Cvb86fMJDU9qUAAAGzSURBVDjLpdXtcqIwFIBhCCLaqt19TwIo+NH7v8klCSQhtbMd+/5izoTHSGageFZVVmVIKVVuKjuI1dvGDWJV8bwDL/S2f0Zt4SUsAJtS2crGbUvuEtJagzGS1nM3suoMfxZqx1xdTJfX7m8aiKwGGuMGMaCYKwk1CrT8wrL3226wt9ftLyzAjQTKD2j1q1ZTValVgrR6qn/4dV2wWumGlaVF2sTavgPRSrt4gGDNy6JlQCfWTHH9YvnlVxOs4Ys1rqwG7sY2uD2YqTN8qGk86a6LIMYT0TIzkVoV+HGsnawDPJJHLd1s3RerW4jLd1Y4gCOc+0uwOpktv7bnvH6AA5y+sZbO7bKNtSWQHwbqqXUjdHODR7Q+c2vMLD0l7g91ZnT7GfH1/tZoSW6ZxCqwLedhwnUsWoOIXludtKl1/LEV67wVe8AhvLqiVb37c461Y2b1ZJYe4VjMpRaQb2Jt3cisFngvlmro9ZR9PTrrqpc+sZb7JT+4xccwuEEP7Kon7/i3QvHfarJOmyKm4udkT1Z5zKnNjlUq+/rUaqq0/n6Cd8rmR+54mJoHTRic3KDeeuIfEk1usBENQywAAAAASUVORK5CYII="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAZCAMAAABO1iMkAAAAb1BMVEUAAAAQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQH/7EoQAQGmly3VxDxsXxmZiijgzkBHOg3KuTgwIgb14ke+rjWyojHr2UOLfSR8bx9bThMK4RPMAAAAFHRSTlMAgcA/Go7RUSLzXUTr4a9uDwSfMKrxCxIAAAG2SURBVDjLpdVte5owFMbxBIowbdVu3icPgCDw/T/jAiQmh9F1a/+v5Fz4IxAvFHud5EmmldecD4qy4gN5ErvlB3yhH8c9y1Ffwp7Ai8zmZCWuQEs1pY3Qmg161HxAE/ArUK+BL+Z1WXNLIxCxgYKmGwuA8Ek8qzJA0Tes+ftzA3A8A03DTjT/ZQHwK4CUACl2ov53q8rz1DoCQ6NUQy7LrY6MZZYi6hKrfAMQLd5mXX4SLQ2oxPIU7jtWyy37h9UyqwJqPWeXm9CuCThncOnHzX+D9EpES68Es3LAjVkd8BOu3h/fATLeqoNlAvH40Io3OtmwaTVgaCX8uT0m/gAtcPjYMmFRBi7NLQK2m4Fs1xqAWvnPTQ1mjVur3VjKRct9G93CNd79okaAW7S1dGK9w6f87wXJQq27iLvGw1uWSHHLUJdY4rJn8ZrViplgxTNwfr66orW7GdzqsbFUC1yE7+/WyK0BG6sD8HYNVgH0yjU9rbuK1dDLldajIT4Suwx6AK+5CJXxtf2Ozyuw6fAiYln8O7l8TrlXOisTrLLIXHL2j9mMZjHptgcuf1QJ4QeHZVCUK/EbMJyBxhEtX4sAAAAASUVORK5CYII="

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAZCAMAAABO1iMkAAAAb1BMVEUAAAAQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQH/7EoQAQGmly3VxDxsXxm+rjXgzkCyojGZiiiLfSRbThMwIgZHOg3r2UN8bx/14kfKuTjwKPmtAAAAFHRSTlMAgb9AGsOOXPMiUc9tROsw4a4Nn7QeEQwAAAG6SURBVDjLndXbbqswEIVhExMIhCZt914+AAnp4f2fscxgd7ATVLX/RWRG1icCCNRGr1rr9qmgnuZDTUupahsZhE1b1Ueseunwc4d6g8IfOqhYWeyooqGDPTA5596doTDnaCkNuPFAugLnSJ0QquYjAP/nrOFfmhpaShaOBxIAFSrwXSOW/5O1Byx1AWqxLP0Ov7UA8MgARWaZX1mN1mtLn/ksB+PvLG/GPrGsMX5ltc8AxKIO4EyfW2GbWA6wKytQ+BArYLQ9sfo7a0qsBrg5ik/C0+oKzE9btBxbbiHEcguRWBpYxpIH/qkitcZg3aI1RuJty5KbeQAuYo2Gibh3wDW9gD1w3LTOmLeL5cQKO/Kbgd1Dix5YGi/bb4n1nltTZtk5w/97dBOoRiwklsktt7IUQjb8IapSD63eGJtao/Frq7uz9vVyuj6zpBFIB5/Ay/erSyxNs0fnJQ3ILDsBnQptW3S3M+uCzPIAnl+jVQGDnaPXo1jxStDt4TV3kUvS84BO86RVrL17bUMqkFch61gqaZd/TjrETmWXU+UJSTuV1Fb87Vj59Z5vKo3KYlnH70scHHlQtYr7Al0Le6WCp2b3AAAAAElFTkSuQmCC"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAZCAMAAAC7KKiUAAAAaVBMVEUAAAAQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQEQAQH/TT+mLyXVPzNsGhWLJR2ZKiJbFA9HDQr1SjyyMyl8IBnKOzC+NywwBgTrRjngQjblZudlAAAAEnRSTlMAgMBAXG7zgzEY6UQgUJ6O06zzcAAwAAABl0lEQVQ4y5XT6ZKiMBSG4QhBwFZ75stJwqr23P9FTjxmISha/f7QkOWpAgrxoqYsT1871/fJXbXHpnQdj27qXtVIN+LCxCtE7pHayz/43PlZ+YssNj/WrJUvAL0x80CuqQdwG3rjGgZDXAfLo1gHVGtmB5ByGcW/AAxp5aKLekTQpJYRsNti7IL54c0O4+bfMI+dN2ZUxpgtht9fVXI5g8R0yofXzOmAPKsvpG1kbo9DhlzGFZhxIrtgnPIczZGBZ+ALjAZMYo7AwK/NcIGhxFiVdfXMlDElX8UA1EVgNHAf5wz5RfrAiN0n5uJP2/ymFBcOCgnYd0yn+T+szMBJCAArpoLbmRirff88Y3LGAKUQBaCv/Ih73Kv5pnjnFTgjZdbMtGBqZB3axFD+hXdrRi+Y9oBUUbciY4BexzLmQvSTGOfUxZk/hkZw/GzGyBiV13km1gPu5HMln91gJuTMaIG9eMvMz4xFzow9APmeMZ7RsT7CY5r4Fq/Dr5JiowqhqkLeXlbrCbGZLHCvkI9hEavbsHhIE67/e+tkqL8Uw0sAAAAASUVORK5CYII="

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/box.1890ee9.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/drop1.455ff90.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/drop2.e91a182.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/drop3.403fd2b.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/drop0.4d0d2bb.png";

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_play_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_play_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_play_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_play_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_play_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(46);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".game-play{width:100%;height:100%;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;position:fixed;top:0;left:0;z-index:1}.game-play .game-play-before{width:100%;height:100%;position:absolute;top:0;left:0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;background-size:100% 100%}.game-play .game-play-before .ol-before{position:absolute;z-index:11;top:0;left:0;width:100%;height:100%;background-color:rgba(1,55,86,.8)}.game-play .game-play-before .ol-before .before-msg{width:80vw;position:absolute;top:35vw;left:50%;transform:translateX(-50%)}.game-play .game-play-before .ol-before .before-hand{width:19vw;position:absolute;top:70vw;left:50%;transform:translateX(-50%);-webkit-animation:handSwipe 2s linear infinite;animation:handSwipe 2s linear infinite}.game-play .game-play-msg{width:100%;height:100%;position:absolute;z-index:6;top:0;left:0}.game-play .game-play-msg .score-and-time{position:absolute;top:16px;left:20px;display:flex;justify-content:flex-start;align-items:center;flex-wrap:nowrap}.game-play .game-play-msg .score-and-time .msg-score{position:relative;margin-right:7px}.game-play .game-play-msg .score-and-time .msg-score img{display:block;height:33px}.game-play .game-play-msg .score-and-time .msg-score span{display:block;width:100%;height:33px;line-height:30px;font-size:15px;color:#ffe039;position:absolute;top:0;left:0;text-align:left;padding-left:32px}.game-play .game-play-msg .score-and-time .msg-time{position:relative}.game-play .game-play-msg .score-and-time .msg-time img{display:block;height:33px}.game-play .game-play-msg .score-and-time .msg-time span{display:block;width:100%;height:33px;line-height:30px;font-size:15px;color:#ffe039;position:absolute;top:0;left:0;text-align:left;padding-left:34px}.game-play .game-play-msg .music-handle{position:absolute;top:19px;right:22px;font-size:25px;color:#fff}.game-play .game-play-msg .music-handle.icon-yinlekai{transform-origin:center center;-webkit-animation:musicRotate 3s linear infinite;animation:musicRotate 3s linear infinite}.game-play .game-play-block{width:100%;height:100%;position:relative;z-index:9}.game-play .game-play-block .get-one-score{display:flex;justify-content:center}.game-play .game-play-block .get-one-score img{display:block;width:75px}.game-play .game-play-block .game-canvas{width:100%;height:100%;position:fixed;top:0;left:0;zoom:.5}.game-play .game-play-block .game-canvas #canvas1{z-index:1}.game-play .game-play-block .game-canvas #canvas2{z-index:2}.game-play .game-play-over{width:100%;height:100%;position:relative;background-color:rgba(1,55,86,.8);display:flex;justify-content:center;align-items:center;color:#fff;font-size:32px}@-webkit-keyframes handSwipe{0%{transform:translateX(-50%)}25%{transform:translateX(0)}50%{transform:translateX(-50%)}75%{transform:translateX(-100%)}to{transform:translateX(-50%)}}@keyframes handSwipe{0%{transform:translateX(-50%)}25%{transform:translateX(0)}50%{transform:translateX(-50%)}75%{transform:translateX(-100%)}to{transform:translateX(-50%)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gaming-bg.eaa0d87.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/before-game-bg.7572ad7.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("30a8dc86", content, true, context)
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_container_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_container_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_container_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_container_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_5_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_game_container_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(50);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".game-container{width:100%;height:100%;background-size:100% 100%}.game-container .game-main{width:100%;height:100%;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100% 100%;position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/index-bg.dd52619.jpg";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/game/game-container.vue?vue&type=template&id=f4b0df1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-container"},[_c('game-play')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/game/game-container.vue?vue&type=template&id=f4b0df1c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/game/game-play.vue + 4 modules
var game_play = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/game/game-container.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
// eslint-disable-next-line


/* harmony default export */ var game_containervue_type_script_lang_js_ = ({
  components: {
    gamePlay: game_play["default"]
  },

  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./components/game/game-container.vue?vue&type=script&lang=js&
 /* harmony default export */ var game_game_containervue_type_script_lang_js_ = (game_containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/game/game-container.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  game_game_containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b656e660"
  
)

/* harmony default export */ var game_container = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GamePlay: __webpack_require__(29).default})


/***/ })
]);;
//# sourceMappingURL=game-container.js.map