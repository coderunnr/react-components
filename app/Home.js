import React from 'react';

import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text>Home Screen</Text>
            <Button
                title = "Go to Details"
                onPress = {() => {
                    this.props.navigation.navigate('Details', {
                        itemId: 86,
                        screenTitle: 'Title',
                    });
                }}
            />
            <Button
                title = "Open Tabs"
                onPress = {() => this.props.navigation.navigate('Tab')}
            />
            <Button
                title = "Go to Drawer"
                onPress = { () => {
                    this.props.navigation.navigate('DrawerNav');
                }}
            />
            <Button
                title = "Open SignIn"
                onPress = {() => this.props.navigation.navigate('Authentication')}
            />
            <Button
                title = "Open Layout Animation"
                onPress = {() => this.props.navigation.navigate('AnimationLayout')}
            />
            </View>
        );
      }
    }
