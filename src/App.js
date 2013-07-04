var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    this.on('songEnd', function(){console.log('hi');});
    //this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      //console.log(this.get('currentSong'));
      //this.get('queue').add(song);
      //console.log(this.get('songQueue'));
      this.set('currentSong', song);
    }, this);
  }

});
