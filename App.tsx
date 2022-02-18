import { KeyboardAvoidingView, Platform } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import tw from "tailwind-react-native-classnames";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={tw`flex-1`}
          behavior={Platform.OS ==='ios'? 'padding':'height'}
          keyboardVerticalOffset={Platform.OS==='ios'? -64:0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EatScreen"
                component={EatsScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
