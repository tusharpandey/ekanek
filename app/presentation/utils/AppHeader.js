import React from 'react';
import { Text, View, Button } from 'react-native';

export const createAppHeader = (props, onPress) => {
    props.navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => onPress()} title="Option" />
        ),
        headerTitle: 'Flicker Image List',
        headerLeft: null,
        headerStyle: {
            backgroundColor: 'skyblue',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            elevation: 0,
            shadowRadius: 0,
        },
    });
}
