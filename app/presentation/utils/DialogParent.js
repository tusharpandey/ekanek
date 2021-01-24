import React, { Component } from 'react';
import {
    Modal,
    View
} from 'react-native';

export default function DialogParent(props) {

    var modalBackgroundStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    return (
        <View>
            <Modal
                onDismiss={() => {
                    props.onDismiss && props.onDismiss()
                    console.log("on Dismiss called")
                }}
                transparent={true}
                animationType="fade"
                visible={props.shouldShow}>
                <View style={[modalBackgroundStyle, { width: '100%', height: '100%', justifyContent: 'center', alignSelf: 'center' }]}>
                    {props.children}
                </View>
            </Modal>
        </View >
    );
}