<template>
  <div class="game-container">
    <!-- 游戏界面 -->
    <game-play />
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'
import gamePlay from './game-play.vue';

export default {
  components: {
    gamePlay,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="less">
.game-container {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  .game-main {
    width: 100%;
    height: 100%;
    background: url('./img/index-bg.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
}
</style>
