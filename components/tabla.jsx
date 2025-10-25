import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Tabla({ encabezados = [], datos = [], anchoColumnas=[] }) {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Table>
                    <Row
                        data={encabezados}
                        widthArr={anchoColumnas}
                        style={styles.head}
                        textStyle={styles.textHead}
                    />
                    <Rows
                        data={datos}
                        widthArr={anchoColumnas}
                        style={styles.row}
                        textStyle={styles.text}
                    />
                </Table>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    head: {
        height: 40,
        backgroundColor: '#0041F2',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textHead: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    row: {
        height: 45,
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
    },
});
