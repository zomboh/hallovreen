AFRAME.registerComponent('correct-gamma', {
  schema: {},
  init: function () {
    renderer = this.el.renderer;
    renderer.gammaFactor = 2.2;
    renderer.gammaOutput = true;
  }
});