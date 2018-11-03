AFRAME.registerComponent('swap-model', {

  schema: {
    light: {
      type: 'selector'
    },
    from: {
      type: 'selector'
    },
    to: {
      type: 'selector'
    },
    sound: {
      type: 'string'
    }
  },

  init: function () {

    this.soundId = null;
    this.animating = false;

    this.el.addEventListener('click', this.swapModel.bind(this));
    this.data.to.addEventListener('animation-finished', this.animationEnd.bind(this));

  },

  swapModel: function () {

    if (!clicksEnabled) return;

    this.data.from.setAttribute("visible", "false");
    this.data.to.setAttribute("position", "0 0 0");
    this.data.to.setAttribute("visible", true);
    this.data.to.setAttribute("animation-mixer", "repetitions: 1;");
    
    if ( (this.soundId == null && !this.animating) || (!sounds.playing(this.soundId) && !this.animating ) ) {
      this.soundId = sounds.play(this.data.sound);
      document.getElementById('score').emit('found', {sound: this.data.sound});
    }
    
    this.animating = true;
    
  },

  animationEnd: function () {

    this.animating = false;
    this.data.to.removeAttribute("animation-mixer");
    this.data.to.setAttribute("visible", false);
    this.data.from.setAttribute("visible", true);
  }

});
