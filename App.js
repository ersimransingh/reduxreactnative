import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import Nav from './Counter';
import {Provider} from 'react-redux';
const initialState = {
  counter:0 
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter:state.counter + 1}
    case 'DECREASE_COUNTER':
      return {counter:state.counter - 1}
  }
  return state;
}
const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
     </Provider>
    );
  }
}

export default App;
