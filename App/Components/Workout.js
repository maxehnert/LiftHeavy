'use strict';

var React = require('react-native');
var LiftPane = require('./Sub-Components/LiftPane');
var {
  StyleSheet,
  Text,
  TextInput,
  NavigatorIOS,
  Component,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,

  },
  // circleButton: {
  //   height: 20,
  //   width: 20,
  //   borderRadius: '50%',
  //   backgroundColor: 'blue'
  // }
});

class Workout extends Component{
  render() {
          return (
    	    <View style={styles.container}>
  	        <Text >
          	  Workout Tab
  	        </Text>
            <LiftPane/>
  	    </View>
          );
      }
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       isLoading: true,
  //       dataSource: new ListView.DataSource({
  //         rowHasChanged: (row1, row2) => row1 !== row2
  //       })
  //     };
  // }

  /*
  ** For the render section I want 4 rows of different lifts
  ** Within each lift row, should be 5 clickable circles and a weight(click to change it's value) listed
  ** At the botton of this 'form' should be an option to 'add and exercise' (wait on this until I have something working first) and a 'Finish' button
  ** On the top should be a Nav bar with a back arrow, Date, and Hamburger
  ** Timer pops up after a lift circle has been pressed

  At the top of the view will be what workout it is
  */

  /*
  renderBook(book) {
   return (
     <TouchableHighlight onPress={() => this.showBookDetail(book)} underlayColor='#dddddd'>
      <View>
      <View style={styles.container}>
          <Image
              source={{uri: book.volumeInfo.imageLinks.thumbnail}}
              style={styles.thumbnail} />
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{book.volumeInfo.title}</Text>
              <Text style={styles.author}>{book.volumeInfo.authors}</Text>
          </View>
      </View>
      <View style={styles.separator} />
    </View>
        </TouchableHighlight>
     );
  }
  */

  // renderLift() {
  //   return (
  //     <View>
  //       <View style={styles.container}>
  //         <View style={styles.liftSection}>
  //           <Text style={styles.liftName}>Squat</Text>
  //           <TextInput keyboardType='numeric' />
  //
  //           <TouchableHighlight onPress={() => this.repCount(num)} underlayColor='red'>
  //             <Image
  //
  //               style={styles.circleButton} />
  //           </TouchableHighlight>
  //
  //         </View>
  //         <TouchableHighlight onPress={() => this.Save(workout)}>Finish</TouchableHighlight>
  //       </View>
  //     </View>
  //   );
  // }
  /*
  ** This section not used yet, but will be to load old workouts into the view and have it fill in the set circles
  **

  componentDidMount() {

  this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.items),
          isLoading: false
        });
      })
      .done();
  }
  */

}

module.exports = Workout;
