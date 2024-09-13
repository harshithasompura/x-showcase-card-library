import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";

import CurrentDate from "@/components/CurrentDate";
import TransactionsList from "@/components/TransactionsList";

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
      {/* Wallet Container */}
      <View style={[styles.boxContainer]}>
        <Text style={styles.headerText}>Wallet</Text>
        <View style={{ height: 12 }}></View>
        <Text style={styles.amountText}>₹72,516.34</Text>
        <View style={{ height: 20 }}></View>
      </View>
      <View style={{ height: 12 }}></View>
      {/* Latest Transactions Container */}
      <View style={[styles.boxContainer, { flex: 1 }]}>
        <Text style={styles.headerText}>Latest Transactions</Text>
        <TransactionsList />
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
    paddingHorizontal: 16,
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
  },
  headerText: {
    fontSize: 20,
    fontFamily: "WorkSans_SemiBold",
    color: "#737B8D",
  },
  boxContainer: {
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#fff",
    width: "auto",
  },
  amountText: {
    fontFamily: "WorkSans_Light",
    fontSize: 56,
    color: "#171619",
    marginVertical: 4,
  },
});
