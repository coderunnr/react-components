import React from 'react';

import { Image, Button } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
   
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return(
            <Button
                onPress = { () => this.props.navigation.navigate('Notifications')}
                title = "Go To Notifications"
            />
        );
    } 
}

class NotificationScreen extends React.Component {
    static navigationOptions = {
        draweLabel: 'Notifications',
    };

    render() {
        return(
            <Button
                onPress = { () => this.props.navigation.goBack()}
                title = "Go Back Home"
            />
        );
    }
}

export default DrawerNav = DrawerNavigator({
    Home: {
        screen: HomeScreen,
    },               
    Notifications: {
        screen: NotificationScreen,
    }},
    {
        navigationOptions: ({ navigation }) => ({
            headerLeft:  <Ionicons name= {'ios-menu'} style = { {paddingLeft: 10, }} size={25} onPress={ () => navigation.navigate('DrawerOpen') } />,
          }),
    },
);