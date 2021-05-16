import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
//import LoginScreen from './Screens/LoginScreen';
import BackGroundImage from '../assets/bg-transparent.png';
const ProfileScreen = () => {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    return (
        <SafeAreaView >
      <ImageBackground source={BackGroundImage} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.heading}>Edit My Profile</Text>
        <Image
        style={styles.profileImg}aaaa
        source={require('../assets/profile-img.jpg')}
        />
        <Text style = {styles.name}>Samima Khan</Text>
        <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email address"
      />
      <TouchableOpacity
        style={styles.pwBtn} 
      >
      <Text style={{color: "#6B3F87", fontSize: 12}}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton} 
      >
        <Text style={{color: "white", fontSize: 17}}>SAVE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logOutBtn}
      >
        <Text  style={{color: "#6B3F87", fontSize: 17}}>LOG OUT</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
      
    </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading:{
      fontSize: 26,
      // marginTop: 32,
     
    },
    name:{
      // marginTop: 24,
      fontSize: 20,
     
    },
    profileImg: {
      // marginTop: 24,
      width: 128,
      height: 128,
      borderRadius: 100,
    },
    input: {
      height: 45,
      width: 312,
      margin: 12,
      marginBottom: 5,
      borderRadius: 8,
      borderColor: '#A397AA',
      borderWidth: 1,
    },
    saveButton: {
      alignItems: "center",
      backgroundColor: "#6B3F87",
      padding: 10,
      height: 48,
      width: 280,
      borderRadius: 8,
    },
    logOutBtn: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 10,
      marginTop: 10,
      height: 48,
      width: 280,
      borderRadius: 8,
      borderColor:"#6B3F87",
      borderWidth: 2,
    },
    bg: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    // bg: {
    //   position:'absolute',
    //   bottom:0
    //   // flex: 1,
    //   // justifyContent: "center"
    // },
    pwBtn: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 10,
      height: 48,
      width: 280,
    },
  });

export default ProfileScreen
