import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";

import CurrentDate from "@/components/CurrentDate";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <CurrentDate />
        <Pressable>
          <Octicons name="stack" size={24} color="#242324" />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEEF1",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  text: {
    fontFamily: "WorkSans_Regular",
    fontSize: 18,
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
  }
});
