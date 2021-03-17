export { default as GameBox } from '../../components/game/box.js'
export { default as GameDrop } from '../../components/game/drop.js'
export { default as GameContainer } from '../../components/game/game-container.vue'
export { default as GamePlay } from '../../components/game/game-play.vue'

export const LazyGameBox = import('../../components/game/box.js' /* webpackChunkName: "components/game-box" */).then(c => c.default || c)
export const LazyGameDrop = import('../../components/game/drop.js' /* webpackChunkName: "components/game-drop" */).then(c => c.default || c)
export const LazyGameContainer = import('../../components/game/game-container.vue' /* webpackChunkName: "components/game-container" */).then(c => c.default || c)
export const LazyGamePlay = import('../../components/game/game-play.vue' /* webpackChunkName: "components/game-play" */).then(c => c.default || c)
