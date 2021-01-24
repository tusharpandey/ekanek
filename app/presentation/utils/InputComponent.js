import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import AppImage from './AppImage';
import { CustomImage } from './CustomImage';
import GlobalStyle from './GlobalStyle';

function InputComponent(props) {

    let onSubmit = (event) => {
        props.onSubmit && props.onSubmit(event.nativeEvent.text.toString())
    }

    return (
        <View style={styles.inputComponentContainer}>

            <CustomImage
                source={AppImage.search}
                style={styles.icon} />

            <TextInput
                defaultValue={props.text}
                style={styles.inputComponent}
                onSubmitEditing={(event) => onSubmit(event)}
                underlineColorAndroid="transparent"
                placeholder={"Search Images"}
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onFocus={() => props.onFocus()}
                onBlur={() => props.onBlur()}
                returnKeyType="done"
                onChangeText={props.handleSearching} />
        </View>
    );
}

const styles = StyleSheet.create({

    inputComponentContainer: {
        flexDirection: 'row',
        ...GlobalStyle.width,
        ...GlobalStyle.input_field_border,
        ...GlobalStyle.app_border,
        alignItems: 'center',
        ...GlobalStyle.input_field_padding,
        height: 50,
    },
    inputComponent: {
        flex: 1,
    },
    icon: {
        width: 13, height: 13, marginRight: 10,
    }
});

export default InputComponent;