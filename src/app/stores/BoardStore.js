'use strict';

var Immutable = require('seamless-immutable');
var alt = require('../../alt');
var BoardActions = require('../actions/BoardActions');
var _ = require('lodash');

class BoardStore {
  constructor() {
    this.boards = Immutable([]);
    this.bindActions(BoardActions);
    this.exportPublicMethods({
      getBoardById: this.onGetBoardById
    });
  }

  onAddBoard(board) {
    var self = this;
    self.boards = self.boards.concat(board);
  }

  onSaveBoard(board) {
    var self = this;
    //filter out baord with same id and replace
    self.boards = self.boards.concat(board);
  }

  onGetBoardById(boardId) {
      var self = this;

      var selectedBoard = _.filter(self.boards, function(board) {
          return board.id === boardId;
      });
      console.log("SELECTED BOASRD: ");
      console.log(selectedBoard);

      return selectedBoard;

  }

}

module.exports = alt.createStore(BoardStore, 'BoardStore');
