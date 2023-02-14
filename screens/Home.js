import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons"
import colors from "../colors";

const catImgUrl = "https://colormadehappy.com/wp-content/uploads/2022/05/IMG_6955-4.jpg";

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImgUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
            <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                    <Text style={{ color: "gray", fontSize: 14 }}>Dun have account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ fontWeight: "bold", color: "black", fontSize: 14 }}>Log</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: colors.gray,
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