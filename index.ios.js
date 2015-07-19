'use strict';

var React = require('react-native');

//var Home = require('./Home');
//var History = require('./History');
//var Graph = require('./Graph');
//var Calender = require('./Calender');

var {
    AppRegistry,
    TabBarIOS,
    StyleSheet,
    Text,
    View,
    Component
   } = React;

class LiftHeavy extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'home'
      };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
              selected={this.state.selectedTab === 'home'}
              icon={{uri:'home'}}
              onPress={() => {
                  this.setState({
                      selectedTab: 'home'
                  });
              }}>
              <Home/>
          </TabBarIOS.Item>
          // <TabBarIOS.Item
          //     selected={this.state.selectedTab === 'search'}
          //     icon={{uri:'search'}}
          //     onPress={() => {
          //         this.setState({
          //             selectedTab: 'search'
          //         });
          //     }}>
          //     <Search/>
          // </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

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
