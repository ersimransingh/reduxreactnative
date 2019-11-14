import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        number:0
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> {this.state.number} </Text>
        <Button 
            title="Back to App Page"
            onPress={() => this.props.navigation.navigate('App')}
        />
      </View>
    );
  }
}

export default Screen;
