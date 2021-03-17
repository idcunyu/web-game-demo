import Vue from 'vue'

const components = {
  GameBox: () => import('../../components/game/box.js' /* webpackChunkName: "components/game-box" */).then(c => c.default || c),
  GameDrop: () => import('../../components/game/drop.js' /* webpackChunkName: "components/game-drop" */).then(c => c.default || c),
  GameContainer: () => import('../../components/game/game-container.vue' /* webpackChunkName: "components/game-container" */).then(c => c.default || c),
  GamePlay: () => import('../../components/game/game-play.vue' /* webpackChunkName: "components/game-play" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
