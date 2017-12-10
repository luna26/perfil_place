import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import CategoriesList from './CategoriesList';
import CategoryItem from './CategoryItem';
import {ButtonCircle, Button} from './common'

class MainPage extends Component {
    render() {
        const { mainPageStyle, fieldSearchStyle } = styles;
        return (
            <View style={mainPageStyle}>
                <View style={fieldSearchStyle}>
                    <ButtonCircle>
                        Buscar
                    </ButtonCircle>
                </View>
                <CategoriesList>
                    <CategoryItem title={'categoria1'} />
                    <CategoryItem title={'categoria2'} />
                    <CategoryItem title={'categoria3'} />
                    <CategoryItem title={'categoria4'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                    <CategoryItem title={'categoria5'} />
                </CategoriesList>
                <ButtonCircle onPress={() => firebase.auth().signOut()}>Log Out!</ButtonCircle>
            </View>
        );
    }
}

const styles = {
    mainPageStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    fieldSearchStyle:{
        marginTop:30
    },
}

export default MainPage;