import React from 'react';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

const ListItemSeparator = (props) => (
    <View style={{
        borderWidth: .5,
        width: '100%',
        borderColor: Colors.accent
    }} />
);

export default ListItemSeparator;