import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';
import { styles } from '../style';

const JustifyContentBasics = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');

    return (
        <PreviewLayout
            label="justifyContent"
            selectedValue={justifyContent}
            values={[
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ]}
            setSelectedValue={setJustifyContent}
        >
            <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
            <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
            <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
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

export default JustifyContentBasics;
