'use strict';

var React = require('react-native');

var Workout = require('./App/Components/Workout');
//var History = require('./History');
//var Graph = require('./Graph');
//var Calender = require('./Calender');

var {
    AppRegistry,
    TabBarIOS,
    StyleSheet,
    Text,
    View,
    Component,
   } = React;

class LiftHeavy extends Component {

  constructor(props) {
    super(props);
    //set the inital state for the home page
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0
    }
  };

   renderContent(color: string, pageText: string) {
     return (
       <View style={[styles.tabContent, {backgroundColor: color}]}>
         <Text style={styles.tabText}>{pageText}</Text>
         <Text style={styles.tabText}>{this.state.presses} re-renders of the More tab</Text>
       </View>
     );
   };

   render() {
     return (
       <TabBarIOS
         tintColor="black"
         barTintColor="#3abeff">

         <TabBarIOS.Item
           title="Workout"
           selected={this.state.selectedTab === 'blueTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'blueTab'
             });
           }}>
          <Workout/>
         </TabBarIOS.Item>

         <TabBarIOS.Item
           systemIcon="history"
           badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
           selected={this.state.selectedTab === 'redTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'redTab',
               notifCount: this.state.notifCount + 1,
             });
           }}>
           {this.renderContent('#783E33', 'Red History Tab')}
         </TabBarIOS.Item>

         <TabBarIOS.Item
           systemIcon="more"
           selected={this.state.selectedTab === 'greenTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'greenTab',
               presses: this.state.presses + 1
             });
           }}>
           {this.renderContent('#21551C', 'Green Tab')}
         </TabBarIOS.Item>
       </TabBarIOS>
     );
   }
};

   var styles = StyleSheet.create({
     tabContent: {
       flex: 1,
       alignItems: 'center',
     },
     tabText: {
       color: 'white',
       margin: 50,
     },
   });

 AppRegistry.registerComponent('LiftHeavy', () => LiftHeavy);

/*
<TabBarIOS.Item
    selected={this.state.selectedTab === 'history'}
    icon={{uri:'history'}}
    onPress={() => {
        this.setState({
            selectedTab: 'history'
        });
    }}>
    <History/>
</TabBarIOS.Item>
<TabBarIOS.Item
    selected={this.state.selectedTab === 'graph'}
    icon={{uri:'graph'}}
    onPress={() => {
        this.setState({
            selectedTab: 'graph'
        });
    }}>
    <Graph/>
</TabBarIOS.Item>
<TabBarIOS.Item
    selected={this.state.selectedTab === 'calender'}
    icon={{uri:'calender'}}
    onPress={() => {
        this.setState({
            selectedTab: 'calender'
        });
    }}>
    <Calender/>
</TabBarIOS.Item>
*/
