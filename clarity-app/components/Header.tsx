import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    logo: any,
    avatar: any,
}

export default function Header({ logo, avatar }: Props) {
    return (
        <View style={styles.main}>
            <View style={{ width: '80%' }}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
            </View>
            <View style={{ width: '20%' }}>
                <Image
                    style={styles.avatar}
                    source={avatar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 89,
        height: 27,
        marginHorizontal: 10
    },
    avatar: {
        width: 32,
        height: 32,
        marginHorizontal: 35
    }
});