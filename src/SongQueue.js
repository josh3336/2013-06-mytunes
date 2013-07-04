var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(!this.at(1)){
        this.playFirst();
      }
    });
    this.on('ended', function(){
      this.dequeue();
    }, this);

  },

  playFirst: function(){
      this.at(0).play();
  },

  dequeue: function(){
    this.remove(this.at(0));
    if(this.at(0)){
      this.playFirst();
    }
  }


  // add : function(){
  //   // still add it to the collection
  //   Songs.prototype.add.apply(this, arguments);
  //   // now do our specially stuff
  // }
});
