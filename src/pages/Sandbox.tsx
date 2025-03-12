import React, { useState, useRef } from "react";
import { View, Text, TextInput, Keyboard, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Alert } from "react-native";

const MyForm = () => {
  const [amount, setAmount] = useState("");
  const nextInputRef = useRef(null);

  const handleSubmit = () => {
    // Fechar o teclado antes de realizar a ação de envio
    Keyboard.dismiss(); // Garantir que o teclado seja fechado

    // Exibir alerta com o valor do campo
    Alert.alert("Formulário Enviado", `Valor: ${amount}`, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center", padding: 20 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Amount</Text>

          {/* Campo de Input */}
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
            returnKeyType="done"  // Botão "done" no iOS
            onSubmitEditing={() => handleSubmit()}  // Quando pressionar "Enter", também envia
          />

          {/* Botão de envio */}
          <Button title="Submit" onPress={handleSubmit} />

          {/* Outro campo (referência para o foco) */}
          <TextInput
            ref={nextInputRef}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MyForm;
