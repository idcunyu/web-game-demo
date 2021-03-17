exports.ids = [3];
exports.modules = {

/***/ 28:
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

/***/ })

};;
//# sourceMappingURL=game-drop.js.map