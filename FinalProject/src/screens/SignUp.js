import React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import firebase from '../database/firebase';
class SignUpScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      displayName: '',
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

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '' & this.state.displayName === ''){
      Alert.alert('Fill all fields!');
    }
    else{
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log("User registred successfully!");
        this.setState({
          isLoading: false,
          displayName: '',
          email: '',
          password: ''
        })
        
        this.props.navigation.navigate('Login');
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  
  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return(
      <View style={styles.container}>
        <MaterialIcons name="restaurant-menu" size={70} color="#0984e3" />
        <Text style={styles.name}>Restaurant Name</Text>
        <Text style={styles.createAcc}>Create Account below</Text>
        <TextInput 
          style={styles.inputStyle} 
          placeholder="Display Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <TextInput 
          style={styles.inputStyle} 
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
         <TextInput 
          style={styles.inputStyle} 
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity 
          style={styles.btnStyle}
          onPress={() => this.registerUser()}
          >
            <Text style={styles.btnTxt}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    ); 
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 40
    },
    title: {
      marginVertical: 10
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
    name: {
      fontWeight: 'bold',
      paddingVertical: 15
    },
    createAcc: {
      paddingBottom: 5,
      alignSelf: 'flex-start',
      marginLeft: 30
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
});
  
export default SignUpScreen;
