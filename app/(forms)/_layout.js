import { Stack } from "expo-router";
export default function formLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="formUsuarios" />
        </Stack>
    );
}
