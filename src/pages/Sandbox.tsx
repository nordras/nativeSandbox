import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Alert,
  ScrollView,
} from "react-native";

const MyForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    // Fechar o teclado e garantir que o submit ocorra no mesmo clique
    Keyboard.dismiss();

    setTimeout(() => {
      Alert.alert("Formulário Enviado", `Valor: ${amount}`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }, 50); // Pequeno delay para garantir que o clique seja processado
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              padding: 20,
            }}
            keyboardShouldPersistTaps="handled" // Permite cliques no botão sem fechar o teclado antes
          >
            <View>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Amount</Text>

              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  padding: 10,
                  marginBottom: 20,
                  fontSize: 16,
                }}
                placeholder="$0.00"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                returnKeyType="done"
                onSubmitEditing={handleSubmit} // Enter também submete o form
              />

              {/* O botão agora fecha o teclado e submete no mesmo clique */}
              <Button title="Submit" onPress={handleSubmit} />

              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 20,
                  fontSize: 16,
                }}
                placeholder="Next Field"
              />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MyForm;
