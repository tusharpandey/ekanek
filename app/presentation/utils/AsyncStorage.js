import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid';
import { isEmptyString } from './Utils';

const SEARCH_JSON = "search_json_obj"

export async function storeSearch(searchKey) {
    try {
        let existingSearchJson = await getSearchJson()

        const isExist = existingSearchJson.filter((item) => { return item.title == searchKey });
        if (!isEmptyString(isExist)) return

        let objectToPush = {
            id: uuidv4(),
            title: searchKey,
        }
        existingSearchJson.push(objectToPush)
        await AsyncStorage.setItem(SEARCH_JSON, JSON.stringify(existingSearchJson))
    } catch (e) {
        console.log("error on store search");
    }
}

export async function getSearchJson() {
    try {
        let json = await AsyncStorage.getItem(SEARCH_JSON)
        let parsedJsonObject = JSON.parse(json)
        return parsedJsonObject != null ? parsedJsonObject : [];
    } catch (e) {
        console.log("error on read search");
    }
}
