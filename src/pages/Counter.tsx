import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri,
          priority: FastImage.priority.high, // Dá prioridade alta para o carregamento
        }}
        resizeMode={FastImage.resizeMode.cover} // Ajusta a imagem ao container
      />
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default Counter