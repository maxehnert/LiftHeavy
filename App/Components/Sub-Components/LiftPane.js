'use strict';

var React = require('react-native');
var Separator = require('./Separator');

var {
  View,
  Text,
  TouchableHighlight,
  Component,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  workoutType: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#48BBEC'
  },
  circleButton: {
     height: 30,
     width: 30,
     borderLeftColor: 'green',
     borderRadius: 50,
     backgroundColor: 'blue',
     flex: 1
   }
});

class LiftPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presses: 0
    }
  };

  handlePress(presses: integer) {
    presses: this.state.presses + 1
    return (
      <View>
        <Text> {presses}</Text>
      </View>
    )
  };

  renderContent(color: string, presses: integer) {
    return (
      <View style={[ {backgroundColor: color}]}>
        <Text >{presses}</Text>
      </View>
    );
  };

  render() {

    var liftArr = ['Squat', 'Bench Press', 'Barbell Row'];

    var list = liftArr.map((item, index) =>{
      var type = liftArr[index];
      return (
        <View key={index}>
          <View>
            <Text style={styles.workoutType}> {type} </Text>
            <TouchableHighlight


            onPress={this.handlePress.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.circleButton}> &#43; </Text>
          </TouchableHighlight>
          {this.renderContent('#783E33', this.state.presses)}
          {this.handlePress}
          </View>
          <Separator />
        </View>
      )
    });

    return (
      <View>
      {list}
      </View>
    )
  }
};

// onPress={() => {
//   this.setState({
//     presses: this.state.presses + 1
//   });
// }}
module.exports = LiftPane;
