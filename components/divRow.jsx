import { View, StyleSheet } from 'react-native';
<<<<<<< HEAD
import {useTheme} from '../hooks/useTheme';

export default function DivRow({ children, style}) {
    const {isDarkMode} = useTheme();

    const backgroundColor = isDarkMode ? '#1E1E1E' : '#FFFFFF';
    return(
        <View style={[styles.div, { backgroundColor }, style]} >
            {children}
        </View>
    );
}    
=======

export default function DivRow({ children}) {
    return(
        <View style={styles.div} >{children}</View>
    );
}
>>>>>>> 2b42710c0a034b3d00892efe2d404d5280025ed4

const styles = StyleSheet.create({
    div: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    }
})