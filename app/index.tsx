import { ScrollView, StyleSheet, TextInput } from "react-native";
import { ShoppingListItems } from "../components/ShoppingListItems";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];

export default function App() {
  const [shoppingList, setShoppingList] = useState(initialList);
  const [item, setItem] = useState("");

  const handleSubmit = () => {
    if (item) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: item },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setItem("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        onChangeText={(input) => {
          setItem(input);
          console.log("Input saved", input);
        }}
        value={item}
        placeholder="E.g. Coffee"
        style={styles.textInput}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList &&
        shoppingList.map((item) => (
          <ShoppingListItems key={item.id} name={item.name} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },
  contentContainer: { paddingBottom: 24 },
  textInput: {
    borderColor: theme.colorGrey,
    borderWidth: 2,
    padding: 8,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
