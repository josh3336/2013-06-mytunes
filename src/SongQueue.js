var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(!this.at(1)){
        this.playFirst();
      }
    });
    this.on('songEnd', function(){
      console.log('stuff');
    });

  },

  playFirst: function(){
      this.at(0).play();
  },

  songend: function(){
  }


  // add : function(){
  //   // still add it to the collection
  //   Songs.prototype.add.apply(this, arguments);
  //   // now do our specially stuff
  // }
});
