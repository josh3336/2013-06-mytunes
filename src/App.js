var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    params.library.on('enqueueMe', function(song){
      this.get('songQueue').add(new Song(song.attributes));
    }, this);

    this.get('songQueue').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    this.get('songQueue').on('endQueue', function(){
      console.log('app heard end');
      this.set('currentSong', null);
    }, this);
  }

});
