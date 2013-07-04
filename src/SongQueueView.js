var SongQueueView = Backbone.View.extend({

    initialize: function(){
      this.collection.on('add ended dequeueMe', function(){
        console.log('heard SQV');
        this.render();
      },this);
    },

   tagName: "table",

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
