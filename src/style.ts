import { StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';

export type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    values: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}>;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    box: {
        width: 50,
        height: 50,
    },
    alignBox: {
        height: 50,
        width: 'auto',
        minWidth: 50,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '48%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: '500',
        color: 'coral',
        height: 30,
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});
