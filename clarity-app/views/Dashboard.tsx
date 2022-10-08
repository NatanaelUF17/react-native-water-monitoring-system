import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string
}

export default function Dashboard({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello to the Dashboard {name}! 🏄🏽</Text>
            <StatusBar style="auto" />
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
        fontFamily: 'montserrat-medium',
        fontSize: 30,
    }
});
