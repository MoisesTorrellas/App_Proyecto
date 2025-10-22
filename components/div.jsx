import { View, StyleSheet } from 'react-native';

export default function Div({ children}) {
    return(
        <View style={styles.div} >{children}</View>
    );
}

const styles = StyleSheet.create({
    div: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    }
})