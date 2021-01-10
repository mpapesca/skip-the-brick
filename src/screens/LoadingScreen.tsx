import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

export default function LoadingScreen() {

    return (
        <View style={styles.container} >
            <Text style={styles.text}>
                Loading
            </Text>
            <ActivityIndicator style={styles.activityIndicator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        margin: 8
    },
    activityIndicator: {
        margin: 8
    }
});