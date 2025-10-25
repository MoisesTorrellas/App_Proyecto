import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
<<<<<<< HEAD
import { useTheme } from '../hooks/useTheme'; // 👈 Import the theme hook

export default function Screen({ children, style }) {
    const insets = useSafeAreaInsets();
    const { isDarkMode } = useTheme();
    
    const themeBackgroundColor = isDarkMode ? '#000000' : '#E0E3E7'; 

    return(
        <View 
            style={[
                { 
                    flex: 1,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    alignItems: 'center',
                    backgroundColor: themeBackgroundColor
                },
                style
            ]}
        >
=======

export default function Screen({children}){
    const insets = useSafeAreaInsets()
    return(
        <View style={{ flex: 1,paddingTop:insets.top,paddingBottom:insets.bottom, alignItems: 'center', backgroundColor: '#E0E3E7'}}>
>>>>>>> 2b42710c0a034b3d00892efe2d404d5280025ed4
            {children}
        </View>
    );
}