import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import GetFlickerImages from '../domain/GetFlickerImages';
import { isEmptyArray, isEmptyString, isObjectEmpty } from '../presentation/utils/Utils';
import { XYRatio } from '../presentation/utils/XYRatio';
import { CachedImage } from "react-native-img-cache";

let xyRatio = new XYRatio()

function FlickerImagesGrid(props) {

    const [flickerImages, setFlickerImages] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        let isSubscribed = true

        if (!isSubscribed) return
        if (isEmptyString(props.searchText)) return

        let getFlickerImages = async () => {
            let getFlickerImages = new GetFlickerImages()
            let imagesResponse = await getFlickerImages.getImages(props.searchText, pageNumber)
            let receivedImagesArray = imagesResponse.photos.photo
            setFlickerImages(flickerImages.concat(receivedImagesArray))
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
                </View>)}
        />)
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