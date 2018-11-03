AFRAME.registerComponent('autoplay', {

  schema: {
  },

  init: function () {

    this.soundId = null;

    this.el.addEventListener('click', function() {

      if (this.soundId == null || !bgAudio.playing(this.soundId)) {

        this.soundId = bgAudio.play();
        clicksEnabled = true;

        var dome = document.getElementById("dome");
        var ui = document.getElementById("ui");

        dome.parentNode.removeChild(dome);
        ui.parentNode.removeChild(ui);

      }

    }.bind(this));

  }

});
