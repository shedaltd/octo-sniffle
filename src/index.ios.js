/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS,
} = React;

var Board = require('./app/components/Board');
var BoardActions = require('./app/actions/BoardActions');
var BoardStore = require('./app/stores/BoardStore');

var octosniffle = React.createClass({
    getInitialState: function() {
        return {board: undefined};
    },
   componentDidMount: function () {

       var noOfTiles = 8;

       var initialTiles = this._generateTiles(noOfTiles);

       var board = {
           id: 0,
           tiles: initialTiles
       };
       BoardActions.addBoard(board);
   },
   _generateRandomColour: function() {

       var red = Math.floor(Math.random() * 255);
       var green = Math.floor(Math.random() * 255);
       var blue = Math.floor(Math.random() * 255);

       var colour1 = 'rgba('+red+','+green+','+blue+',0.95)';

       return colour1;

   },
   _generateTiles: function (noOfTiles) {

       var tileArray = [];

       for (var i = 0; i < noOfTiles; i++) {
           var colour = this._generateRandomColour();
           tileArray.push({
               track: '',
               colour: colour
           });
       }
       return tileArray;
   },
  render: function() {
      //call to boardstore
      StatusBarIOS.setHidden(true);

      var initialBoard = BoardStore.getBoardById(0);

    //   console.log(initialBoard);

    return (
      <View style={styles.container}>
        <Board tiles={1}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('octosniffle', () => octosniffle);
