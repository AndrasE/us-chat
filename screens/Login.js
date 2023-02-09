import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "..config/firebase";
const backImg = require("../assets/us.webp");

export default function Login({ Navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Login sucessful"))
            .catch((err) => Alert.alert("Login error", err.message))
        }
    }

    return (
        <View style={styles.container}>
            <Image source={backImg} style={styles.backImg} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flew: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "orange",
    }
})