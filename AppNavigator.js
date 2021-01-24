import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomePage from './app/presentation/HomePage';

const Stack = createStackNavigator();

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
};

const AppNavigator = (props) => {
    return (
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator initialRouteName="home" >
                <Stack.Screen name="home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
