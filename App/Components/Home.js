'use strict';

var React = require('react-native');
//var Workout = require('./Workout');

var {
    StyleSheet,
    NavigatorIOS,
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
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Featured Books',
            component: Workout
            }}/>
        );
    }
}

module.exports = Home;
