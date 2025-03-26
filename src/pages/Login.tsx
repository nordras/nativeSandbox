import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      Alert.alert('Conta criada com sucesso!');
    } catch (error: unknown) {
      const firebaseError = error as { message: string };
      Alert.alert('Erro ao criar conta', firebaseError.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      Alert.alert('Login realizado com sucesso!');
    } catch (error: unknown) {
      const firebaseError = error as { message: string };
      Alert.alert('Erro ao fazer login', firebaseError.message);
    }
  };

  const handleLogout = async () => {
    await auth().signOut();
    setUser(null);
    Alert.alert('Deslogado com sucesso!');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Bem-vindo, {user.email}!</Text>
          <Button title="Sair" onPress={handleLogout} />
        </>
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Criar Conta" onPress={handleSignUp} />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Login;
