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
    flexDirection: 'column',
    //justifyContent: 'center',
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

  handleCount(presses) {
    this.setState = ({
      presses: this.state.presses
    })
  };

  renderContent(color: string, pageText: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
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

            onPress={() => {
              this.setState({
                presses: this.state.presses + 1
              });

            }}
            underlayColor="#88D4F5">
            <Text style={styles.circleButton}> &#43; </Text>
          </TouchableHighlight>
          {this.renderContent('#783E33', '+ Tab')}
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

module.exports = LiftPane;
