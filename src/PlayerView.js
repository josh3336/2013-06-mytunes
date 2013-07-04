var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var self = this;
    this.$el.on('ended', function(){
      self.model.dequeue();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
