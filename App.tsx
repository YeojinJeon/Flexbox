import { SafeAreaView, StyleSheet } from 'react-native';
import FlexDirectionBasics from './src/components/FlexDirectionBasics';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <FlexDirectionBasics />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
