import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  NewPage: undefined;
  Greetings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Página Inicial</Text>
      <Button title="Ir para Nova Página" onPress={() => navigation.navigate('Greetings')} />
    </View>
  );
};

export default HomeScreen;
