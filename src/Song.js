var Song = Backbone.Model.extend({

  initialize: function(){
     // this.on('ended', function(){console.log('hi');});

  },

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended');
  },

  dequeue:function(){
    this.ended();
  }


});
