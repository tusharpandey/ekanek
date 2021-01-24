import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { getSearchJson } from '../utils/AsyncStorage';
import GlobalStyle from '../utils/GlobalStyle';
import { FlatListItemSeparator } from '../utils/Utils';

const Item = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{
        ...GlobalStyle.globalSquareBorder,
        ...GlobalStyle.item_border_color,
        ...GlobalStyle.itemPadding
    }}>
        <Text style={{ fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
);

function SearchSuggestion(props) {

    const [searchSuggestions, setSearchSuggestions] = useState([]);

    useEffect(() => {
        let accessAsyncStorage = async () => {
            let storedSuggestions = await getSearchJson()
            storedSuggestions = storedSuggestions.reverse()
            setSearchSuggestions(storedSuggestions)
        }
        accessAsyncStorage()
    }, [])

    const renderItem = ({ item }) => (
        <Item title={item.title} onPress={() => props.onItemPress(item.title)} />
    );

    return (<View style={{ marginTop: 5 }}>
        <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={searchSuggestions}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>);
}

export default SearchSuggestion