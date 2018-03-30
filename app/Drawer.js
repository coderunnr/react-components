import React from 'react';

import { Image, Button, View } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
   
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return(
            <View style = {{ flex: 1, justifyContent: 'space-evenly' , alignItems: 'center'}}>
            <Button
                onPress = { () => this.props.navigation.navigate('Notifications')}
                title = "Go To Notifications"
            />
            <Button
                onPress = { () => this.props.navigation.navigate('Home')}
                title = "Go Back"
            />
            </View>
        );
    } 
}

class NotificationScreen extends React.Component {
    static navigationOptions = {
        draweLabel: 'Notifications',
    };

    render() {
        return(
            <View style = {{ flex: 1, justifyContent: 'space-evenly' , alignItems: 'center'}}>
            <Button
                onPress = { () => this.props.navigation.goBack()}
                title = "Go Back Home"
            />
            <Button
                onPress = { () => this.props.navigation.navigate('Home')}
                title = "Go Back"
            />
            </View>
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