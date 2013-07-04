var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(!this.at(1)){
        this.playFirst();
      }
    });
    this.on('ended', function(){
      console.log('ended');

      this.ended();
    }, this);

    this.on('enqueueMe', function(song){
      console.log("heard it");
    },this);

    this.on('dequeueMe', function(song){
      this.remove(song);
    }, this);

  },

  playFirst: function(){
   // debugger
   console.log(this.at(0));
   this.at(0).play();

  },

  ended: function(){
    this.remove(this.at(0));
    if(this.at(0)){
       this.playFirst();
    }

}
  // dequeue: function(){
  //   this.remove(this.at(0));
  //   if(this.at(0)){
  //     this.playFirst();
  //   }
  // }


  // add : function(){
  //   // still add it to the collection
  //   Songs.prototype.add.apply(this, arguments);
  //   // now do our specially stuff
  // }
});
