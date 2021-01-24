import { getFlickerImages } from "../data/Repository"

export default class GetFlickerImages {
    async getImages(searchText,pageNumber) {
        let response = await getFlickerImages(searchText,pageNumber)
        return response
    }
}