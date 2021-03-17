exports.ids = [1];
exports.modules = {

/***/ 27:
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

/***/ })

};;
//# sourceMappingURL=game-box.js.map