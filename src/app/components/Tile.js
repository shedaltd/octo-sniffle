var React = require('react-native');
var AudioPlayer = require('react-native-media-player');
var {
    View,
    StyleSheet,
    TouchableHighlight
} = React;

var TileActions = require('../actions/TileActions');

var Tile = React.createClass({
    // propTypes:{
    //     /**
    //     * Width of Individual Tile
    //     * type: Int
    //     **/
    //     width: React.propTypes.number,
    //     /**
    //     * Height of Individual Tile
    //     * type: Int
    //     **/
    //     height: React.propTypes.number
    // },
    getInitialState: function() {
        return {
            tracks: ['banzan-23.mp3','basement.mp3','frozen-flokati.mp3','nolimit.mp3',
            'organge-sprinkles.mp3','plasticized.mp3','small-silver.mp3','vicious-sid.mp3'],
        };
    },
    _onTouch: function() {

        console.log("Clickity click");
        var track = this.state.tracks[this.props.id];
        console.log(track);
        AudioPlayer.playAddedTrack(track,false);
        console.log('hello');
        TileActions.playTrack({id:"id"});
    },
    _onLongTouch: function() {
        console.log("LONG PRESS BABBBAYYY");
    },
    render: function() {

        return (
            <TouchableHighlight onPress={this._onTouch} onLongPress={this._onLongTouch}>
                <View style={[{width: this.props.width, height: this.props.height, backgroundColor: this.props.colour}]}>
                </View>
            </TouchableHighlight>
        );
    }
});

var styles = StyleSheet.create({

});
module.exports = Tile;
