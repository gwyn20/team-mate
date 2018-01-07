import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonSmall = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{ children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 10,
        width: '50%',
        backgroundColor: '#404956',
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 25,
    }
});

export { ButtonSmall };
