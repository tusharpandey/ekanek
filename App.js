import React, { Fragment } from 'react';
import {
  SafeAreaView
} from 'react-native';
import AppNavigator from './AppNavigator';

const App = (props) => {
  console.log("================ NEW SESSION =================");
  console.log("APP js : " + JSON.stringify(props));
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'skyblue' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
