import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Screen({children}){
    const insets = useSafeAreaInsets()
    return(
        <View style={{ flex: 1,paddingTop:insets.top,paddingBottom:insets.bottom, alignItems: 'center', backgroundColor: '#E0E3E7'}}>
            {children}
        </View>
    );
}