import {  StyleSheet,  } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle'

export const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        ...GlobalStyle.itemPadding,
        ...GlobalStyle.itemMargin,
    },
    title: {
        fontSize: 32,
    },
});