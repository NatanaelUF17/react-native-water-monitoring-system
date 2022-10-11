import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function WaterPresentation() {
    const waterImage = require('../assets/water-presentation.png');

    return (
        <View style={styles.waterPresentationContainer}>
            <View>
                <Text style={styles.waterPresentationText}>It's time to test</Text>
                <Text style={styles.waterPresentationText}>the water</Text>
            </View>
            <View style={styles.waterImageContainer}>
                <Image
                    style={styles.waterImage}
                    source={waterImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    waterPresentationContainer: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#3B70EE',
        width: '100%',
        height: 132,
        marginTop: 25,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    waterPresentationText: {
        color: 'white',
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        textAlign: 'left'
    },
    waterImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    waterImage: {
        width: 110,
        height: 80
    }
});