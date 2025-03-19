import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import firebase from '@react-native-firebase/app';

// const { MyNativeModule } = NativeModules; NativeModules,

// MyNativeModule.showToast('Olá do módulo nativo em Kotlin!');

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valor inicial da opacidade

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacidade final
      duration: 1000, // Tempo da animação em ms
      useNativeDriver: true, // Usa o driver nativo para melhor desempenho
    }).start();
  }, [fadeAnim]);

  const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    text: { fontSize: 24, fontWeight: 'bold' },
  });

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    console.log('Firebase inicializado:', firebase.app().name);
  }, []);

  return (
    <FadeInView>
      <View style={styles.container}>
        <Text style={styles.title}>🏠 Home</Text>
        <Text style={styles.subtitle}>Escolha uma página:</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sandbox")}>
          <Text style={styles.buttonText}>📊 Sandbox</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Counter")}>
          <Text style={styles.buttonText}>📊 Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FlatList")}>
          <Text style={styles.buttonText}>📋 FlatList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FlashList")}>
          <Text style={styles.buttonText}>📋 FlashList</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Greetings")}>
          <Text style={styles.buttonText}>👋 Greetings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NewPage")}>
          <Text style={styles.buttonText}>📄 NewPage</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Standard")}>
          <Text style={styles.buttonText}>⚙ Standard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ImageCache")}>
          <Text style={styles.buttonText}>⚙ Image Caching</Text>
        </TouchableOpacity>
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Home;
