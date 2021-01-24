import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid';

const SEARCH_JSON = "search_json_obj"

export async function storeSearch(searchKey) {
    try {
        let existingSearchJson = await getSearchJson()
        let objectToPush = {
            id: uuidv4(),
            title: searchKey,
        }
        existingSearchJson.push(objectToPush)
        // console.log("existingSearchJson : " + JSON.stringify(existingSearchJson));
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
