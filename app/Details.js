import React from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LogoTitle extends React.Component {

    render() {
      return (
        <Text>{this.props.title}</Text>
      );
    }
  }

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;
      
      return {
        title: params ? params.screenTitle : 'A Nested Details Screen',
        headerTitle: <LogoTitle title = "Title" />,
        headerRight: (
            <Ionicons name='ios-alert' size={25} />
          ),
      }
    };

  render() {
    console.log( this.props.navigation.state);
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Text>Details Screen</Text>
        <Text>itemId: {itemId}</Text>

        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({screenTitle: 'Updated!', itemId: 85})}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}