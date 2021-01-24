import { Dimensions } from "react-native";

export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
export class XYRatio {

    constructor() {
        this.height = 375;
        this.width = 812;
    }

    getX(dimen) {
        var percentage = (dimen / this.width)
        let value = percentage * screenWidth;
        return value;
    }

    getY(dimen) {
        var percentage = (dimen / this.height)
        let value = percentage * screenHeight;
        return value
    }

    getDeviceWidth() {
        let width = Math.round(Dimensions.get('window').width)
        return width
    }

    getDeviceHeight() {
        return Math.round(Dimensions.get('window').height)
    }

    getItemDimensionWhenItems(itemsCount) {
        let dimension = (this.getDeviceWidth() - this.getX(32)) / itemsCount
        return dimension
    }
}