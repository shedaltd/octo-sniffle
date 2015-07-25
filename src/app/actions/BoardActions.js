'use strict';

var alt = require('../alt');

class BoardActions {
  constructor() {
    this.generateActions('saveBoard', 'addTile');
  }
}

module.exports = alt.createActions(BoardActions);
