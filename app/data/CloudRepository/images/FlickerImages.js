import { getRequest } from "../network/Network";
import { BASE_URL, JSON_CALLBACK, LEFT_URL } from '../network/Urls'

export function getFlickerImageList(searchText, pageNumber) {
    return getRequest(BASE_URL + searchText + LEFT_URL + pageNumber + JSON_CALLBACK)
}