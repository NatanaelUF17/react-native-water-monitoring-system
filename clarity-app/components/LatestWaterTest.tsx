import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import WaterTestCard from './common/WaterTestCard';

export default function LatestWaterTest() {
    const temperatureIcon = require('../assets/temperature.png');
    const phIcon = require('../assets/ph.png');
    const turbidityIcon = require('../assets/turbidity.png');

    return (
        <View style={styles.latestWaterContainer} >
            <Text style={styles.latestWaterText}> Latest water test</Text>
            <View style={styles.attributesMainContainer}>
                <View style={styles.firstAttributesContainer}>
                    <WaterTestCard
                        title='TEMPERATURE'
                        icon={temperatureIcon}
                        placeholder='20° C' />
                    <WaterTestCard
                        title='PH'
                        icon={phIcon}
                        placeholder='8' />
                </View>
                <View style={styles.turbidityContainer}>
                    <View style={styles.turbidityLeft}>
                        <Image
                            source={turbidityIcon}
                            style={styles.turbidityIcon}
                        />
                        <Text style={styles.turbidityPlaceholder}>TURBIDITY</Text>
                    </View>
                    <View style={styles.turbidityRight}>
                        <Text style={styles.turbidityText}>5 NTU</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    latestWaterContainer: {
        flex: 1,
        marginTop: 30,
        width: '100%',
    },
    latestWaterText: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
    },
    attributesMainContainer: {
        marginVertical: 25
    },
    firstAttributesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    turbidityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 85,
        marginVertical: 15,
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
    turbidityLeft: {
        flexDirection: 'column',
        height: '100%',
        marginLeft: 24,
        justifyContent: 'space-evenly',
    },
    turbidityRight: {
        marginRight: 24
    },
    turbidityText: {
        fontFamily: 'montserrat-bold',
        fontSize: 24
    },
    turbidityPlaceholder: {
        color: '#ABAAAA',
        letterSpacing: 0.12,
        fontFamily: 'montserrat-semi-bold',
    },
    turbidityIcon: {
        height: 29,
        width: 29
    }
});