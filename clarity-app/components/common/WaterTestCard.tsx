import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface Props {
    icon: ImageSourcePropType,
    title: string,
    placeholder: string,
}

export default function WaterTestCard({ icon, title, placeholder }: Props) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={icon}
                style={styles.icon}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.placeholder}>{placeholder}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16.5,
        backgroundColor: '#fff',
        height: 120,
        width: 146,
        borderRadius: 10,
        shadowColor: "#0000000F",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 8,
    },
    icon: {
        width: 29,
        height: 29
    },
    title: {
        fontFamily: 'montserrat-semi-bold',
        color: '#ABAAAA',
        textAlign: 'left',
        fontSize: 12,
        marginVertical: 10,
        letterSpacing: 0.12
    },
    placeholder: {
        fontFamily: 'montserrat-bold',
        fontSize: 20
    }
})