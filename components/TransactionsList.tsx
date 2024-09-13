import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Transaction {
  date: string;
  type: string;
  amount: number;
  name: string;
}

const TransactionsList = () => {
  const insets = useSafeAreaInsets();

  const transactions = [
    { date: "2024-09-12", type: "Credit", amount: 40000, name: "Salary" },
    { date: "2024-09-11", type: "Debit", amount: 500, name: "Groceries" },
    { date: "2024-09-10", type: "Credit", amount: 200, name: "Interest" },
    { date: "2024-09-09", type: "Debit", amount: 300, name: "Utilities" },
    { date: "2024-09-08", type: "Credit", amount: 50, name: "Gift" },
    { date: "2024-09-07", type: "Debit", amount: 150, name: "Dining Out" },
    { date: "2024-09-06", type: "Credit", amount: 100, name: "Reimbursement" },
    { date: "2024-09-05", type: "Debit", amount: 250, name: "Transportation" },
    { date: "2024-09-04", type: "Credit", amount: 75, name: "Cashback" },
    { date: "2024-09-03", type: "Debit", amount: 120, name: "Entertainment" },
  ];

  const TransactionItem: React.FC<
    React.PropsWithChildren<{ transaction: Transaction }>
  > = ({ transaction }) => {
    const { date, type, amount, name } = transaction;
    const color = type === "Credit" ? "#11834B" : "#F85448";
    const symbol = type === "Credit" ? "+" : "-";

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 8,
        }}
      >
        <View style={{ marginBottom: 4 }}>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text]}>{date}</Text>
        </View>
        <Text style={[styles.text, styles.amount, { color }]}>
          {symbol} ₹{amount}
        </Text>
      </View>
    );
  };

  return (
    <View style={[{ paddingBottom: insets.bottom }]}>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "WorkSans_Regular",
    fontSize: 16,
    color: "#7D7E7D",
    paddingTop: 4,
  },
  name: {
    fontSize: 18,
    color: "#1E1F1E",
    fontFamily: "WorkSans_SemiBold",
  },
  amount: {
    fontFamily: "WorkSans_SemiBold",
    fontSize: 18,
  },
});

export default TransactionsList;
