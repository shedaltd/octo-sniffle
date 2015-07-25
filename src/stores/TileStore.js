var Immutable = require('seamless-immutable');
var alt = require('../alt');
var PlaylistActions = require('../actions/TileActions');
var AudioPlayer = require('react-native-media-player');

class TileStore {
  constructor() {
    this.tracks = Immutable([]);
    this.bindActions(TileActions);
  }

  onPlayTrack(trackId) {

  }

  onRecordTrack() {

  }

  onDeleteTrack() {

  }

}

module.exports = alt.createStore(TileStore, 'TileStore');
