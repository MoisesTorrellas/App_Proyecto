import { Text, StyleSheet } from "react-native";

export default function Titulo({ title, color = "#3A4750" }) {
  return <Text style={[styles.title, { color }]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 10,
  },
});
