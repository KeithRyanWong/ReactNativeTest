/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View, Text } from 'react-native';
import configureStore from './app/store/store';


import MainContainer from './app/components/main_container';

class reactTest extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <MainContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactTest', () => reactTest);

export default reactTest;