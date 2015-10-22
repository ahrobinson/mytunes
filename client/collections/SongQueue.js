// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function() {
    // this.model = this.library.at(0);
    // console.log(this);
    // console.log('model:' + this.model);
    // console.log(this.at(0));
    this.at(0).play();
  }


});
