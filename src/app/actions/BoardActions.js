'use strict';

var alt = require('../../alt');

class BoardActions {
  constructor() {
    this.generateActions('addBoard','saveBoard', 'addTile');
  }
}

module.exports = alt.createActions(BoardActions);
