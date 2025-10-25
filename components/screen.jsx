import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../hooks/useTheme";

export default function Screen({ children, style }) {
    const insets = useSafeAreaInsets();
    const { isDarkMode } = useTheme();

    const themeBackgroundColor = isDarkMode ? "#000000" : "#E0E3E7";

    return (
        <View
            style={[
                {
                    flex: 1,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    alignItems: "center",
                    backgroundColor: themeBackgroundColor,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}
