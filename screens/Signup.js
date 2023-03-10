import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
const backImg = require("../assets/us.jpg");

export default function Signup({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignup = () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => console.log("Signup sucessful"))
                .catch((err) => Alert.alert("Signup error", err.message))
        }
    }

    return (
        <View style={styles.container}>
            <Image source={backImg} style={styles.backImg} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Signup</Text>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                    <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>Signup</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                    <Text style={{ color: "gray", fontSize: 14 }}>Do u have n account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 14 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flew: 1,
        backgroundColor: "#d9d7d7",
        height: "100%"
    },
    title: {
        fontWeight: 300,
        fontSize: 26,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        paddingBottom: 24,
    },
    input: {
        backgroundColor: "#fff",
        height: 45,
        marginBottom: 20,
        fontSize: 35,
        borderRadius: 15,
        paddingLeft: 10,
    },
    backImg: {
        width: "100%",
        height: 250,
        position: "absolute",
        top: 0,
        resizeMode: "cover",
    },
    whiteSheet: {
        width: "100%",
        height: "75%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#F0EEED",
        borderTopLeftRadius: 30,
    },
    form: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: "black",
        height: 58,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    }
})