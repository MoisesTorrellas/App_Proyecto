import { View, StyleSheet } from 'react-native';

export default function DivColumn({ children}) {
    return(
        <View style={styles.div} >{children}</View>
    );
}

const styles = StyleSheet.create({
    div: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    }
})