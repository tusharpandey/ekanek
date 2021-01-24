import React from 'react'
import { View } from 'react-native'

export function validateEmail(text) {
    let emailRegx = /^\w+([-+.']\w+)*@\w+([-.']\w+)*\.\w+([-.]\w+)*$/;
    if (emailRegx.test(text) == false) {
        return false;
    } else {
        return true;
    }
}

export const FlatListItemSeparator = () => {
    return (
        <View
            style={{
                height: 5,
                width: "100%",
                backgroundColor: "#ffffff",
            }}
        />
    );
}

export const isEmptyString = (value) => {
    if (value == undefined) return true
    let text = value.trim()
    if (text.length == 0) return true
    return false
}

export const isUndefinedString = (value) => {
    if (value == undefined) return true
    return false
}

export const getString = (value) => {
    return isEmptyString(value) ? "" : value
}

export function isObjectEmpty(object) {
    var isEmpty = true;
    for (keys in object) {
        isEmpty = false;
        break;
    }
    return isEmpty;
}

export function isObjectValuesEmpty(object) {
    var isEmpty = true;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var val = object[key];
            console.log("val is : " + val);
            if (!isEmptyString(val)) {
                isEmpty = false;
                break
            }
        }
    }
    return isEmpty;
}

export function splitString(string) {
    let stringArray = string.split(/(\s+)/);
    return stringArray
}

export const delay = (func, time = 400) => {
    setTimeout(() => { func() }, time)
}

export const uniqueIDGenerator = (appendExtra) => {
    let append = appendExtra == undefined ? "" : appendExtra
    let unqId = Date.now();
    return unqId + append
}

export const isEmptyArray = (array) => {
    return (Array.isArray(array) && array.length) ? false : true
}