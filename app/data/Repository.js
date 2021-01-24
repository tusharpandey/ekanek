import { getFlickerImageList } from './CloudRepository/images/FlickerImages'

export function getFlickerImages(searchText,pageNumber) {
    return getFlickerImageList(searchText,pageNumber)
}