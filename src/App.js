var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    //this.set('songQueue', new SongQueue());
    params.library.on('enqueueMe', function(song){
      this.get('songQueue').add(song);
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  }

});
