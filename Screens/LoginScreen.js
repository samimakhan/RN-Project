import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
    return (
        <View >


            <View style={styles.body}>
                <Text style={styles.heading}>Sign In</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#D3D3D3"
                    //  value={email}
                    autoFocus
                //  onChangeText={onChangeEmail}

                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#D3D3D3"
                    secureTextEntry
                    autoFocus
                //  onChangeText={onChangeEmail}

                />
                <TouchableOpacity
                    style={styles.loginBtn}

                >
                    <Text style={styles.loginText}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.noAcc}>Don't have an account?</Text>
                <TouchableOpacity
                    style={styles.signupBtn}

                >
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.background} source={require("../assets/background-01.png")} />
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        marginTop: 0,
        top: 30,
        bottom: -100,
        left: -90,
        right: 0,
        opacity: 0.3,
        width:400,
        justifyContent:"center",
        alignItems:"center"
        //    height:10


    },
    body: {
        display: 'flex',
        flex: 1,
        top: -5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        marginTop: 0,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 6
    },
    inputText: {
        marginTop: 5,
        width: 200,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth:1,
        paddingLeft: 5,
        justifyContent: 'space-around',
        marginTop: 9,
        marginBottom:9,
    },
    loginBtn: {
        backgroundColor: "#6b3f87",
        width: 200,
        height: 35,
        borderRadius: 5,
        marginTop:5,
        // marginBottom:5
    },
    loginText: {
        color: "white",
        textAlign: "center",
        paddingTop:7,
        fontWeight:"400",
        fontSize:14,
        // marginBottom:4
    },
    signupBtn:{
        // backgroundColor: "#6b3f87",
        marginTop:30,
        borderRadius:10,
        borderColor:"#3e155a",
        borderWidth:2,
        width: 200,
        height: 35,
        borderRadius: 5,

    },
    signupText:{
        textAlign:"center",
        paddingTop:4,
        color:"#3e155a",
        fontWeight:"500",
        fontSize:14
    },
    noAcc:{
        position: 'absolute',
        marginTop: 0,
        bottom:40,
    }
})

export default LoginScreen;