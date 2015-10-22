// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log(JSON.stringify(this.models))
    // this.playFirst()
    this.on('add', function(song){
      if(this.models.length === 1){
        this.playFirst()
      }
    })
    this.on('ended', function(song){
      console.log("logging this in songQueue");
      // console.log(this.toJSON());
      // console.log(song.toJSON());
      // // console.log(JSON.stringify(this));
      // console.log(JSON.stringify(this));
      this.shift();
      if(this.models.length > 0){
        this.playFirst();
      }
    })
    this.on('dequeue', function(song){
      this.remove(song);
      if(this.models.length > 0){
        this.playFirst();
      }
    })

  },

  playFirst: function() {
    // this.model = this.library.at(0);
    // console.log(this);
    // console.log('model:' + this.model);
    // console.log(this.at(0));
    this.at(0).play();
  }


});
