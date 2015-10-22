// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
      this.render();
      // this.listenTo(LibraryEntryView, 'click', console.log);
      console.log("loggging this:");
      console.dir(this);
      this.collection.on('add remove', function(){
        // console.log("add or remove!!!!");
        this.render();
      },this);
      // this.listenTo(currentSong, 'change', function(){
      //   console.log("songQueue changed")
      // });
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // debugger;
    // console.log(this.collection);
    // console.dir("this value:"+this);
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        // console.log(song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
