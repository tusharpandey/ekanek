const axios = require('axios');

export async function getRequest(url) {
    console.log("URL : " + url);
    let responseObject = ""
    try {
        responseObject = await axios.get(url);
        responseObject = responseObject.data
        if (responseObject.success == false) {
            responseObject = { error: 101, errorMsg: "Please Check your internet connection" }
        }
    } catch (error) {
        responseObject = { error: 101, errorMsg: "Please Check your internet connection" }
    }
    return responseObject
}