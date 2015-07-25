'use strict';

var alt = require('../../alt');

class TileActions {
  constructor() {
    this.generateActions('playTrack','startRecordTrack','finishRecordTrack','playTrackLoop','deleteTrack');
  }
}

module.exports = alt.createActions(TileActions);
