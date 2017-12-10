import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Footer } from './components/common';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCNe542nZ8vt7n_pWXhxyt9ZqdTUShUHns",
            authDomain: "perfilplace.firebaseapp.com",
            databaseURL: "https://perfilplace.firebaseio.com",
            projectId: "perfilplace",
            storageBucket: "",
            messagingSenderId: "1082996429803"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        const { spinnerContent } = styles;
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{flex:1}}>
                        <MainPage />
                    </View>
                    //<Button onPress={() => firebase.auth().signOut()}>Log Out!</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <View style={spinnerContent}><Spinner size='large' /></View>
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='Inicio de Sesión' />
                {this.renderContent()}
                <Footer text={'Costa Rica 2017 | Jose Luna'}/>
            </View>
        );
    }
}

const styles = {
    spinnerContent: {
        justifyContent: 'center',
        flex: 1
    }
}

export default App;