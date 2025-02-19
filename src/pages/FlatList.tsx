import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { FlatList } from "react-native";

const DATA = useMemo(() => Array.from({ length: 1000 }, (_, i) => ({ id: i.toString(), title: `Item ${i + 1}` })), []);

const renderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

const ListComparisonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 FlatList (Nativo)</Text>
      <FlatList data={DATA} keyExtractor={(item) => item.id} renderItem={renderItem} />

      <Text style={styles.title}>🚀 FlashList (Shopify)</Text>
      <FlashList data={DATA} keyExtractor={(item) => item.id} renderItem={renderItem} estimatedItemSize={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
  },
});

export default ListComparisonScreen;
