import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Screen from './Screen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number:1
    };
  }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>{this.props.counter}</Text>
        <Button 
          title="Increase Value"
          onPress={() => this.props.increaseCounter()}
        />
        <Button 
          title="Descrease Value"
          onPress={() => this.props.descreaseCounter()}
        />
        <Button 
          title="Screen Page"
          onPress={() => this.props.navigation.navigate('Screen')}
        />
      </View>
    );
  }
}
function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToCounter(dispatch){
    return{
        increaseCounter: () => dispatch({
             type:'INCREASE_COUNTER'
        }), 
        descreaseCounter: () => dispatch({
             type:'DECREASE_COUNTER'
        })
    }
}
const navigation = createSwitchNavigator({
    Counter,
    Screen
})
const Nav = createAppContainer(navigation);
export default connect(mapStateToProps, mapDispatchToCounter)(Counter);
