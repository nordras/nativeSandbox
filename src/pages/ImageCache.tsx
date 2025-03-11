import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FastImage from "react-native-fast-image";

const ImageComparisonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 Imagem Padrão</Text>
      <Image
        source={{ uri: "https://source.unsplash.com/random/200x200" }}
        style={styles.image}
      />

      <Text style={styles.title}>🚀 Imagem com FastImage</Text>
      <FastImage
        source={{ uri: "https://source.unsplash.com/random/200x200", priority: FastImage.priority.high }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default ImageComparisonScreen;
