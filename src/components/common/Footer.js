import React from 'react';
import { Text, View } from 'react-native';

const Footer = ({ text }) => {
    const { footerContainerStyle, textFooterStyle } = styles;
    return(
        <View style={footerContainerStyle}>
            <Text style={textFooterStyle}>
                {text}
            </Text>
        </View>
    );
}

const styles = {
    footerContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080ff',
        height:40,
        marginTop:20,
        position: 'relative',
        elevation: 2,
    },
    textFooterStyle:{
        color: '#fff'
    }
}
export {Footer};