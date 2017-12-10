import React, { Component } from 'react';
import { ScrollView } from 'react-native';

const CategoriesList = ({ children }) => {
    const {CategoriesListStyle} = styles;
    return(
        <ScrollView style={CategoriesListStyle}>
            {children}
        </ScrollView>
    );
};

const styles ={
    CategoriesListStyle:{
        flex:2,
        paddingLeft:15, 
        paddingRight:15,
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        marginBottom:20,
        borderRadius:20
    }
}

export default CategoriesList;