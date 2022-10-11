import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LatestWaterTest from '../components/LatestWaterTest';
import WaterPresentation from '../components/WaterPresentation';

interface Props {
    name?: string
}

export default function Dashboard({ name }: Props) {
    return (
        <ScrollView style={styles.mainContainer}>
            <StatusBar style="auto" />
            <View style={styles.welcomeContainer}>
                <Text style={styles.text}>Welcome,</Text>
                <Text style={styles.text2}>{name}</Text>
            </View>
            <WaterPresentation />
            <LatestWaterTest />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30
    },
    welcomeContainer: {
        marginTop: 2,
        marginBottom: 2
    },
    text: {
        fontFamily: 'montserrat-bold',
        fontSize: 20,
        textAlign: 'left'
    },
    text2: {
        fontFamily: 'montserrat-medium',
        fontSize: 20,
        textAlign: 'left'
    },
});
