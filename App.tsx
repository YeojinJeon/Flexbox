import { SafeAreaView, StyleSheet } from 'react-native';
import AlignItemsLayout from './src/components/AlignItemsLayout';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <AlignItemsLayout />
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
