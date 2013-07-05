var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var self = this;
    this.$el.on('ended', function(){
      self.model.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    if (this.model === null) {
      return this.stop();
    }
    this.render();
  },

  stop: function() {
    // Setting the HTML5 audio player's src to an empty string stops it
    // See: http://stackoverflow.com/questions/9283656/stopping-html5-audio
    this.$el.attr('src', '');
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
