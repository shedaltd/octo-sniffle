var React = require('react-native');

var {
    View,
    StyleSheet
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
    render: function() {

        return (
            <View style={[{width: this.props.width, height: this.props.height, backgroundColor: this.props.colour}]}>
            </View>
        );
    }
});

var styles = StyleSheet.create({

});
module.exports = Tile;
