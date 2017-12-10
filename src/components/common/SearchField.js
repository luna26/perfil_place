import React from 'react';
import { View, TextInput } from 'react-native';

const SearchField = ({ placeholder, value, onChangeText }) => {
    const { TextInputStyle } = styles;

    return (
        <TextInput 
            style={TextInputStyle}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = {
    TextInputStyle: {
        borderRadius: 50,
        marginLeft:10,
        marginRight: 10,
        borderColor: '#007aff',
        borderWidth: 1
    }
}

export { SearchField };