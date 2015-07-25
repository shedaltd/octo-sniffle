'use strict';

var Immutable = require('seamless-immutable');
var alt = require('../alt');
var BoardActions = require('../actions/BoardActions');

class BoardStore {
  constructor() {
    this.boards = Immutable();
    this.bindActions(BoardActions);
  }

}
