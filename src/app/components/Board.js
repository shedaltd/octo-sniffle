var React = require('react-native');
var _ = require('lodash');

var {
    View,
    StyleSheet
} = React;

var Dimensions = require('Dimensions');
var Tile = require('./Tile');

var Layout = require('../styles/Layout');
var Colours = require('../styles/Colours');
var BoardStore = require('../stores/BoardStore');

var Board = React.createClass({
    // propTypes:{
    //
    // },
    getInitialState: function() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        };
    },
    componentDidMount: function () {
        BoardStore.listen(this._onChange);
    },
    componentDidMount: function () {
        BoardStore.unlisten(this._onChange);
    },
    _onChange: function (argument) {
        this.setState({
            // Tiles : BoardStore.getState().Boards;
        });
    },
    _generateRandomColour: function(noOfTiles) {

        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);

        var colour1 = 'rgba('+red+','+green+','+blue+',0.95)';

        red = 255 - red;
        green = 255 - green;
        blue = 255 - blue;

        var colour2 = 'rgba('+red+','+green+','+blue+',0.95)';

        return [colour1, colour2];

    },
    _createRow: function(noOfCols, tileHeight, tileWidth, tileColour) {

        var rowArray = [];
        var rowColourArray = this._generateRandomColour();


        for (var i = 0; i < noOfCols; i++) {

            var colour = rowColourArray[i];
            var tile = (
                <Tile width={tileWidth} height={tileHeight} colour={colour} />
            )
            rowArray.push(tile);
        };

        return rowArray;

    },
    _createCol: function(noOfRows, noOfCols, tileHeight, tileWidth) {

        var columnArray = [];

        for (var i = 0; i < noOfRows; i++) {

            var tiles = this._createRow(noOfCols, tileHeight, tileWidth);

            var row = (
                <View style={Layout.flexRow}>
                    {tiles}
                </View>
            )
            columnArray.push(row);
        };

        return columnArray;

    },
    _createTiles: function(noOfTiles) {


        var noOfRows = noOfTiles / 2;
        var noOfCols = Math.floor(noOfTiles / noOfRows);

        var tileWidth = this.state.width / noOfCols;
        var tileHeight = this.state.height / noOfRows;


        var columns = this._createCol(noOfRows, noOfCols, tileHeight, tileWidth);

        return columns;

    },
    render: function() {

        var tiles = this._createTiles(8);
        var backgroundColor = '#000000';



        return (
            <View style={[Layout.flexCol, {width: this.state.width, height: this.state.height, backgroundColor: backgroundColor} ]}>
                {tiles}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000'
    }

});
module.exports = Board;
