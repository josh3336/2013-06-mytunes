var Song = Backbone.Model.extend({

  initialize: function(){
     this.on('songEnd', function(){console.log('hi');});

  },

  play: function(){
    this.trigger('play', this);
  }


});
