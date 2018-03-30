import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/Home';
import DetailsScreen from './app/Details';
import ModalScreen from './app/ModalScreen';
import TabNavigator from './app/Tab';
import AnimationLayout from './app/AnimationLayout';
import DrawerNav from './app/Drawer';
import Authentication from './app/Authentication';

const MainStack = StackNavigator (
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Tab: {
      screen: TabNavigator,
    },
    DrawerNav: {
      screen: DrawerNav,
    },
    Authentication: {
      screen: Authentication,
    },
    AnimationLayout: {
      screen: AnimationLayout,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator (
  {
    Main: {
      screen: MainStack,
    },
    ModalScreen: {
      screen: ModalScreen
    },
  },
    {
      mode: 'modal',
      headerMode: 'none'
    }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
