import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Enviar
            </Button>
        );
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((e) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            loading: false,
            error: 'Error en el Inicio de Sesión'
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    render() {
        const { errorTextStyle, cardContainer } = styles;
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <View style={cardContainer}>
                    <Card>
                        <CardSection>
                            <Input
                                label='Email'
                                placeholder='usuario@gmail.com'
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </CardSection>

                        <CardSection>
                            <Input
                                label='Password'
                                placeholder='password'
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                secureTextEntry
                            />
                        </CardSection>

                        <Text style={errorTextStyle}>
                            {this.state.error}
                        </Text>

                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                    </Card>
                </View>
            </View>
        );
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    cardContainer: {
        marginTop: 50
    }
}

export default LoginForm;