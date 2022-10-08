import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Onboarding() {
    const navigation: any = useNavigation();
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Onboarding page!</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
            />
            <Button
                title='Go to Dashboard'
                onPress={() => navigation.navigate('Navigation', { name: name })}
                disabled={!name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'montserrat-bold',
        fontSize: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginVertical: 40
    },
});