// code by @feiss
AFRAME.registerComponent('score', {
  init: function () {
    this.total = 9;
    this.found = [];
    this.scoreEl = this.el.querySelector('#scoreValue');
    this.scoreTextEl = this.el.querySelector('#scoreText');
    this.scoreGameOverEl = this.el.querySelector('#scoreGameOver');
    this.el.addEventListener('found', this.scoreUp.bind(this));
    this.updateTexts();
  },

  scoreUp: function (ev) {
    if (this.found.indexOf(ev.detail.sound) === -1) {
      this.found.push(ev.detail.sound);
      this.updateTexts();
    }
  },

  updateTexts: function () {
    var scoretxt = this.found.length + '/' + this.total;
    var showGameOver = (this.found.length === this.total);
    this.scoreEl.setAttribute('text', {value: scoretxt});
    this.scoreGameOverEl.setAttribute('visible', showGameOver);
  }

});
