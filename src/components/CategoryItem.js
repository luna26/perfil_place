import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCircle } from './common';

const CategoryItem = ({ title }) => {
    const { categoryItemStyle, textStyle } = styles;
    return (
        <View style={categoryItemStyle}>
            <ButtonCircle style={textStyle}>
               {title}
            </ButtonCircle>
        </View>
    );
}

const styles = {
    categoryItemStyle: {
        marginTop: 10,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#0080ff'
    }
}

export default CategoryItem;