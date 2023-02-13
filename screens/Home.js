import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { Fontawesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"
import colors from "../colors";

const catImgUrl = "https://colormadehappy.com/wp-content/uploads/2022/05/IMG_6955-4.jpg";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerLeft: () => (
                <Fontawesome name="search" size={24} color={colors.gray} style={{ margin: 20 }} />
            ),
            headerRight: () => (
                <Image
                    source={{ url: catImgUrl }}
                    style={{
                        width: 40,
                        heigh: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={StyleSheet.container}>
            onPress={() => navigation.navigate("Chat")}
            style={styles.button}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#fff",   
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50, 
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    }
})