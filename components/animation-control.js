
AFRAME.registerComponent('animation-control', {
  schema: {
    target: {
      type: 'selector'
    },
    sound: {
      type: 'string'
    }
  },

  init: function () {

    this.soundId = null;
    this.animating = false;
    this.oldAnimationData = this.data.target.getAttribute("animation-mixer");

    this.el.addEventListener('click', this.playAnimation.bind(this));

    this.data.target.addEventListener('animation-finished', this.endAnimation.bind(this));

  },

  playAnimation: function (){

    if (!clicksEnabled) return;

    currentData = this.data.target.getAttribute("animation-mixer");

    if (currentData.clip != "idle") {
      return;

    } else {
      this.data.target.removeAttribute("animation-mixer");
      this.data.target.setAttribute("animation-mixer", this.data);
      if ( (this.data.sound != null && this.soundId == null && !this.animating) || (this.data.sound != null && !sounds.playing(this.soundId) && !this.animating ) ) {
        this.soundId = sounds.play(this.data.sound);
        document.getElementById('score').emit('found', {sound: this.data.sound});
      }
      this.animating = true;
    }
  },

  endAnimation: function () {

    this.animating = false;
    this.data.target.removeAttribute("animation-mixer");
    this.data.target.setAttribute("animation-mixer", this.oldAnimationData);
  }

});