import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createAppHeader } from './utils/AppHeader';
import GlobalStyle from './utils/GlobalStyle';
import GridOptions, { itemdimension } from './optionsList/GridOptions';
import InputComponent from './utils/InputComponent';
import { storeSearch } from './utils/AsyncStorage';
import SearchSuggestion from './suggestions/SearchSuggestion';
import { isEmptyString } from './utils/Utils';
import FlickerImagesGrid from '../imagesGrid/FlickerImagesGrid';

function HomePage(props) {

    const [shouldShowOptionDialog, setOptionDialogStatus] = useState(false)
    const [shouldShowInputFieldSuggestions, setInputFieldSuggestionsStatus] = useState(false)
    const [itemDimension, setItemDimension] = useState(itemdimension.GRID_2_ITEM_DIMENSION)
    const [searchText, setSearchingText] = useState("")
    const [suggestionSelectionTxt, setSuggestionSelectionTxt] = useState("")

    useEffect(() => {
        createAppHeader(props, onOptionPress)
    }, [])

    let onOptionsDialogItemPress = (dimension) => {
        setOptionDialogStatus(false)
        setItemDimension(dimension)
    }

    let onOptionPress = (title) => {
        setOptionDialogStatus(true)
    }

    let handleSearching = async (text) => {

    }

    let onSubmit = (text) => {
        setInputFieldSuggestionsStatus(false)
        if (isEmptyString(text)) return
        storeSearch(text)
        setSearchingText(text)
    }

    let onSearchSuggestionItemPress = (text) => {
        setInputFieldSuggestionsStatus(false)
        if (isEmptyString(text)) return
        setSearchingText(text)
        setSuggestionSelectionTxt(text)
    }

    let onFocus = () => {
        setInputFieldSuggestionsStatus(true)
    }

    let onBlur = () => { }

    return (<View style={{ flex: 1, ...GlobalStyle.app_padding }}>

        <InputComponent
            text={suggestionSelectionTxt}
            onSubmit={onSubmit}
            onFocus={onFocus}
            onBlur={onBlur}
            handleSearching={handleSearching} />

        {shouldShowInputFieldSuggestions &&
            <SearchSuggestion onItemPress={onSearchSuggestionItemPress} />}

        {!shouldShowInputFieldSuggestions && <FlickerImagesGrid
            searchText={searchText}
            itemDimension={itemDimension} />}

        <GridOptions
            onItemPress={onOptionsDialogItemPress}
            shouldShow={shouldShowOptionDialog} />
    </View>);
}

export default HomePage
