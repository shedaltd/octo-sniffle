var React = require('react-native');

var {
    View,
    StyleSheet,
    TouchableHighlight
} = React;

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
    // getInitialState: function() {
    //     return {
    //         width: this.props.width,
    //         height: this.props.height
    //     };
    // },
    _onTouch: function() {
        console.log("Clickity click");
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
