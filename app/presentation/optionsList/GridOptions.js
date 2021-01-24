import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import DialogParent from '../utils/DialogParent';
import GlobalStyle from '../utils/GlobalStyle'
import { v4 as uuidv4 } from 'uuid';
import { styles } from './GridOptionsStyle'
import { XYRatio } from '../utils/XYRatio';

let xyRatio = new XYRatio()

export const seasons = {
    GRID_2_ITEM: "2 Items",
    GRID_3_ITEM: "3 Items",
    GRID_4_ITEM: "4 Items",
}

export const itemdimension = {
    GRID_2_ITEM_DIMENSION: xyRatio.getItemDimensionWhenItems(2),
    GRID_3_ITEM_DIMENSION: xyRatio.getItemDimensionWhenItems(3),
    GRID_4_ITEM_DIMENSION: xyRatio.getItemDimensionWhenItems(4),
}

const DATA = [
    {
        id: uuidv4(),
        title: seasons.GRID_2_ITEM,
        itemDimension: itemdimension.GRID_2_ITEM_DIMENSION
    },
    {
        id: uuidv4(),
        title: seasons.GRID_3_ITEM,
        itemDimension: itemdimension.GRID_3_ITEM_DIMENSION
    },
    {
        id: uuidv4(),
        title: seasons.GRID_4_ITEM,
        itemDimension: itemdimension.GRID_4_ITEM_DIMENSION
    },
];

const Item = ({ title, onPress, itemDimension }) => (
    <TouchableOpacity onPress={() => onPress(itemDimension)} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

export default function GridOptions(props) {

    const renderItem = ({ item }) => (
        <Item title={item.title} onPress={props.onItemPress} itemDimension={item.itemDimension} />
    );

    return (
        <DialogParent shouldShow={props.shouldShow}>
            <View style={{ ...GlobalStyle.app_margin, backgroundColor: 'white' }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </DialogParent >
    );
}