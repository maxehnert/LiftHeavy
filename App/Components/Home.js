'use strict';

var React = require('react-native');
//var Workout = require('./Workout');

var {
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Home extends Component {
    render() {
        return (
            <View>
              <Text>
                I'm some text
              </Text>
            </View>
        );
    }
};

module.exports = Home;
