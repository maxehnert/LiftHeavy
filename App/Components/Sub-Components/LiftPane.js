'use strict';

var React = require('react-native');

var {
  View,
  Text,
  TouchableHighlight,
  Component
} = React;

class LiftPane extends Component {


  handleCount() {
    this.setState = ({
      presses: 5
    })
  }

  render() {

    var liftArr = ['Squat', 'Bench Press', 'Barbell Row'];

    var list = liftArr.map((item, index) =>{
      var type = liftArr[index];
      return (
        <View key={index}>
          <View>
            <TouchableHighlight

            onPress={() => {
              this.setState({
                presses: this.state.presses > 1
              });

            }}
            underlayColor="#88D4F5">
            <Text> Woot {type}</Text>
          </TouchableHighlight>
          </View>
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

module.exports = LiftPane;
