var Song = Backbone.Model.extend({

  initialize: function(){
     // this.on('ended', function(){console.log('hi');});

  },

  play: function(){
    console.log(this.attributes.count);
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueueMe', this);
  },

  ended: function(){
   this.trigger('ended', this);
  },

  dequeue:function(){
    this.trigger('dequeueMe', this);
  }


});
