import { StyleSheet, Platform, Dimensions } from 'react-native';
import { XYRatio } from './XYRatio';

let xyRatio = new XYRatio(375, 812)

const GlobalStyle = StyleSheet.create({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    app_margin: {
        marginBottom: xyRatio.getY(19),
        marginTop: xyRatio.getY(19),
        marginLeft: xyRatio.getX(16),
        marginRight: xyRatio.getX(16)
    },
    app_padding: {
        paddingBottom: xyRatio.getY(8),
        paddingTop: xyRatio.getY(8),
        paddingLeft: xyRatio.getX(16),
        paddingRight: xyRatio.getX(16)
    },
    app_padding_left_right: {
        paddingLeft: xyRatio.getX(16),
        paddingRight: xyRatio.getX(16)
    },

    app_margin_left_right: {
        marginLeft: xyRatio.getX(16),
        marginRight: xyRatio.getX(16)
    },

    app_padding_top_bottom: {
        paddingTop: xyRatio.getY(19),
        paddingBottom: xyRatio.getY(19),
    },

    itemMargin: {
        margin: xyRatio.getY(8),
    },

    itemPadding: {
        padding: xyRatio.getY(8),
    },

    globalBorder: {
        borderWidth: 1,
        borderRadius: 3,
    },
    globalSquareBorder: {
        borderWidth: 1,
    },
    inout_field_globalBorder: {
        borderBottomWidth: 2,
        borderRadius: 3,
    },
    item_border_color: {
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    input_field_border: {
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    app_border: {
        borderWidth: 1,
        borderRadius: 5,
    },
    input_field_padding: {
        paddingHorizontal: 13,
        paddingVertical: 8,
    },
});

export default GlobalStyle;
