import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../database/firebase'; 

class LoginScreen extends React.Component{
    
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    loginUser = () => {
        if(this.state.email === '' && this.state.password === ''){
            Alert.alert('Fill all fields!');
        }
        else{
            this.setState({
                isLoading: true
            })
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                console.log("User logged in successfully!");
                this.setState({
                    isLoading: false,
                    email: '',
                    password: ''
                })
                this.props.navigation.navigate('Home');
            })
            .catch(error => this.setState({errorMessage: error.message}) )
        }
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" />
              </View>
            );
        }
        return(
            <View style={styles.container}>
                <MaterialIcons name="restaurant-menu" size={70} color="#0984e3" />
                <Text style={styles.name}>Restaurant Name</Text>
                <Text style={styles.loginText}>Login</Text>
                <TextInput 
                    placeholder="Email" 
                    style={styles.inputStyle}
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.inputStyle}
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.btnStyle}
                    onPress={() => this.loginUser()}
                >
                    <Text style={styles.btnTxt}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
   
    inputStyle: {
    width: '85%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 7,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    },
    name: {
        fontWeight: 'bold',
        paddingVertical: 15
    },
    loginText: {
    paddingBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 30
    },
    btnTxt: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 15
    },
    btnStyle: {
    backgroundColor: '#0984e3',
    width: '70%',
    borderRadius: 30,
    marginTop: 7
    },
});

export default LoginScreen;