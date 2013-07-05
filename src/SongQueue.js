var SongQueue = Songs.extend({

  initialize: function(){
    this.timesPlayed = {};
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
      if (this.length === 1) {
        this.remove(song);
        this.trigger('endQueue', this);
      }
      if (song === this.at(0)){
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }

    }, this);

  },

  playFirst: function(){
    if (this.timesPlayed.hasOwnProperty(this.at(0).attributes.title)){
      this.timesPlayed[this.at(0).attributes.title]++;
    } else {
      this.timesPlayed[this.at(0).attributes.title] = 1;
    }
    this.at(0).attributes.count = this.timesPlayed[this.at(0).attributes.title];
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
