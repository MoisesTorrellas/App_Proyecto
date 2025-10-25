import { View, StyleSheet } from 'react-native';
import {useTheme} from '../hooks/useTheme';
export default function DivColumn({ children, style}) {
    const {isDarkMode} = useTheme();

    const backgroundColor = isDarkMode ? '#1E1E1E' : '#FFFFFF';
    return(
        <View style={[styles.div, { backgroundColor }, style]} >
            {children}
        </View>
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