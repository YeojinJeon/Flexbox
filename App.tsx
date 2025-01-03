import { SafeAreaView, StyleSheet } from 'react-native';
import AlignItemsLayout from './src/components/AlignItemsLayout';
import JustifyContentBasics from './src/components/JustifyContentBasics';
import FlexDirectionBasics from './src/components/FlexDirectionBasics';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <FlexDirectionBasics /> */}
            <JustifyContentBasics />
            {/* <AlignItemsLayout /> */}
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
