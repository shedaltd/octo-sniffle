var Immutable = require('seamless-immutable');
var alt = require('../../alt');
var TileActions = require('../actions/TileActions');
var AudioPlayer = require('react-native-media-player');

class TileStore {
  constructor(alt) {
    this.tracks = Immutable([]);
    var tileActions = alt.getActions('TileActions');
    console.log(tileActions);
    console.log(TileActions);
    this.bindActions(tileActions);
    //this.bindActions(this.bindActions(this.alt.getActions('myActions')););
  }

  onPlayTrack() {
      console.log("text");
  }

  onPlayTrack(trackId) {
      console.log("text");
  }

  onRecordTrack() {

  }

  onDeleteTrack() {

  }

}

module.exports = alt.createStore(TileStore, 'TileStore');
