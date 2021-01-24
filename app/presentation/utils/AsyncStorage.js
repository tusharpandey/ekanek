import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid';
import { isEmptyArray, isEmptyString, isObjectEmpty } from './Utils';

const SEARCH_JSON = "search_json_obj"

export async function storeSearch(searchKey) {
    try {
        let existingSearchJson = await getSearchJson()
        const isExist = existingSearchJson.filter((item) => { return item.title == searchKey });
        if (!isEmptyArray(isExist)) return

        let objectToPush = {
            id: uuidv4(),
            title: searchKey,
        }
        existingSearchJson.push(objectToPush)
        await AsyncStorage.setItem(SEARCH_JSON, JSON.stringify(existingSearchJson))
    } catch (e) {
        console.log("error storeSearch");
    }
}

export async function getSearchJson() {
    try {
        let json = await AsyncStorage.getItem(SEARCH_JSON)
        let parsedJsonObject = JSON.parse(json)
        return parsedJsonObject != null ? parsedJsonObject : [];
    } catch (e) {
        console.log("error getSearchJson");
    }
}

export async function storeSearchKeyResponse(searchKey, searchResponse) {
    try {
        if (isEmptyString(searchKey) || searchResponse == {}) return
        let existingSavedResponse = await getSearchKeyResponse(searchKey)
        if (!isObjectEmpty(existingSavedResponse)) return
        await AsyncStorage.setItem(searchKey, JSON.stringify(searchResponse))
    } catch (e) {
        console.log("error storeSearchKeyResponse" + e);
    }
}

export async function getSearchKeyResponse(searchKey) {
    try {
        if (isEmptyString(searchKey)) return {}
        let json = await AsyncStorage.getItem(searchKey)
        let parsedJsonObject = JSON.parse(json)
        return parsedJsonObject != null ? parsedJsonObject : {};

    } catch (e) {
        console.log("error getSearchKeyResponse");
    }

}
