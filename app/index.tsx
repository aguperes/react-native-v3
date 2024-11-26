import { StyleSheet, View } from "react-native";
import { ShoppingListItems } from "../components/ShoppingListItems";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href="/counter"
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to counter
      </Link>
      <ShoppingListItems name="Coffee" />
      <ShoppingListItems name="Tea" isCompleted={true} />
      <ShoppingListItems name="Sugar" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
