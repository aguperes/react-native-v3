import { StyleSheet, View } from "react-native";
import { ShoppingListItems } from "../components/ShoppingListItems";
import { theme } from "../theme";

export default function App() {
  return (
    <View style={styles.container}>
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
