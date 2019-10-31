import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Search from './src/Search';
import {Router, Scene} from 'react-native-router-flux';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="search"
          component={Search}
          title="1st screen"
          initial={true}
        />
      </Scene>
    </Router>
  );
};
export default Routes;
