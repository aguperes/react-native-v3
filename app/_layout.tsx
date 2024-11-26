import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="list" color={color} size={size}></Feather>;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign
                name="clockcircleo"
                color={color}
                size={size}
              ></AntDesign>
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "My Idea",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5
                name="lightbulb"
                color={color}
                size={size}
              ></FontAwesome5>
            );
          },
        }}
      />
    </Tabs>
  );
}
