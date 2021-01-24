import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import GetFlickerImages from '../../domain/GetFlickerImages';
import { isEmptyArray, isEmptyString, isObjectEmpty } from '../utils/Utils';
import { XYRatio } from '../utils/XYRatio';
import { CachedImage } from "react-native-img-cache";
import { getSearchKeyResponse, storeSearchKeyResponse } from '../utils/AsyncStorage';

let xyRatio = new XYRatio()

function FlickerImagesGrid(props) {

    const [flickerImages, setFlickerImages] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setLoadingStatus] = useState(false)

    useEffect(() => {
        let isSubscribed = true

        if (!isSubscribed) return
        if (isEmptyString(props.searchText)) return

        let getFlickerImages = async () => {
            setLoadingStatus(true)
            let getFlickerImages = new GetFlickerImages()
            let imagesResponse = await getFlickerImages.getImages(props.searchText, pageNumber)
            if (imagesResponse.error == 101) {
                imagesResponse = await getSearchKeyResponse(props.searchText)
            }
            setLoadingStatus(false)
            if (imagesResponse == {}) return
            let receivedImagesArray = imagesResponse.photos.photo
            setFlickerImages(flickerImages.concat(receivedImagesArray))
            if (pageNumber == 1) {
                await storeSearchKeyResponse(props.searchText, imagesResponse)
            }
        }
        getFlickerImages()
        return (() => {
            isSubscribed = false
        })
    }, [props.searchText, pageNumber])

    useEffect(() => { setPageNumber(1) }, [props.shouldResetPageNumber])

    let getFlickerImageUrl = (props) => {
        let farmId = props.farm
        let server_id = props.server
        let id = props.id
        let secret = props.secret
        let url = `https://farm${farmId}.staticflickr.com/${server_id}/${id}_${secret}.jpg`
        return url
    }

    let onEndReached = () => {
        let value = pageNumber + 1
        setPageNumber(value)
    }

    return (
        <View style={{ flex: 1 }}>
            {flickerImages.length == 0 && <View style={{ alignSelf: 'center', marginTop: 100 }}>
                {!isLoading && <Text>{"No result found"}</Text>}
                {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
            </View>}

            <FlatGrid
                spacing={0}
                onEndReached={onEndReached}
                itemDimension={props.itemDimension}
                data={isEmptyArray(flickerImages) ? [] : flickerImages}
                renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <CachedImage
                            style={{ width: props.itemDimension - 10, height: props.itemDimension - 5 }}
                            source={{
                                uri: getFlickerImageUrl(item),
                            }}
                        />
                    </View>)
                }
            /></View>)
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 160,
        margin: 1
    },
    list: {
        flex: 1
    }
});

export default FlickerImagesGrid