import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import FastImage from "react-native-fast-image";

const renderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.item}>
    <FastImage
      style={styles.image}
      source={{
        uri: `https://example.com/image${item.id}.jpg`,
        priority: FastImage.priority.high,
        cache: FastImage.cacheControl.immutable,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
    <Text>{item.title}</Text>
  </View>
);

const ListWithImagesScreen = () => {
  const DATA = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: (i + 1).toString(),
        title: `Item ${i + 1}`,
      })),
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 Lista com Imagens (FastImage)</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default ListWithImagesScreen;
