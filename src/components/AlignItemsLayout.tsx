import React, { PropsWithChildren, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../style';

const AlignItemsLayout = () => {
    const [alignItems, setAlignItems] = useState('stretch');

    return (
        <PreviewLayout
            label="alignItems"
            selectedValue={alignItems}
            values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
            setSelectedValue={setAlignItems}
        >
            <View
                style={[
                    styles.alignBox,
                    { backgroundColor: 'powderblue', width: 300 },
                ]}
            />
            <View style={[styles.alignBox, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.alignBox, { backgroundColor: 'steelblue' }]} />
        </PreviewLayout>
    );
};

type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    values: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}: PreviewLayoutProps) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map(value => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>
            {children}
        </View>
    </View>
);

export default AlignItemsLayout;
