var React = require('react-native');

var {
    View,
    StyleSheet
} = React;

var Dimensions = require('Dimensions');

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
    _createTiles: function(noOfTiles) {

        console.log(noOfTiles);

        var noOfRows = noOfTiles / 2;
        var noOfCols = Math.floor(noOfTiles / noOfRows);

        var tileWidth = this.state.width / noOfCols;
        var tileHeight = this.state.height / noOfRows;

        console.log("View Width: " + this.state.width);
        console.log("Tile Width: " + tileWidth);

        console.log("View Height: " + this.state.height);
        console.log("Tile Height: " + tileHeight);


    },
    render: function() {

        this._createTiles(8);

        var backgroundColor = '#000000';

        return (
            <View style={[{width: this.state.width, height: this.state.height, backgroundColor: backgroundColor} ]}>

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
