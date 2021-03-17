<template>
  <div class="page-game">
    <game-container />
  </div>
</template>

<script>
import GameContainer from '../components/game/game-container.vue';

export default {
  components: {
    GameContainer,
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="less">
.page-game {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
