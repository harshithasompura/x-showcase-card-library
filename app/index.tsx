import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";

import CurrentDate from "@/components/CurrentDate";
import TransactionsList from "@/components/TransactionsList";
import CardLibrary from "@/components/CardLibrary";

export default function App() {
  const sheetRef = useRef<BottomSheetMethods>(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <CurrentDate />
        <Pressable onPress={() => sheetRef.current?.open()}>
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
      {/* Card Library Bottom Sheet */}
      <BottomSheet
        style={{ backgroundColor: "white" }}
        ref={sheetRef}
        backdropMaskColor="#00000088"
      >
        <CardLibrary />
      </BottomSheet>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEEF1",
    justifyContent: "space-between",
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
    paddingHorizontal: 12,
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
    marginHorizontal: 12,
  },
  amountText: {
    fontFamily: "WorkSans_Light",
    fontSize: 56,
    color: "#171619",
    marginVertical: 4,
  },
});
