import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
import Counter from "./src/pages/Counter";
import FlatList from "./src/pages/FlatList";
import Greetings from "./src/pages/Greetings";
import NewPage from "./src/pages/NewPage";
import Standard from "./src/pages/Standard";
import FlashList from "./src/pages/FlashList";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Counter: undefined;
  FlatList: undefined;
  FlashList: undefined;
  Greetings: undefined;
  NewPage: undefined;
  Standard: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="FlashList" component={FlashList} />
        <Stack.Screen name="Greetings" component={Greetings} />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="Standard" component={Standard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
