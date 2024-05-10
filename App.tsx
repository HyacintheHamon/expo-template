import Constants from "expo-constants";
import "./global.css";
import { EntryScreen, TabScreen } from "@screens"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {

  const Stack = createNativeStackNavigator();

 ///const initialRouteName = 'TabScreen';

  const navigationOptions = {
    gestureEnabled: false,
    headerShown: false,
  };
  
  const screenOptions = {
    gestureEnabled: false,
    headerShown: false,
  };

  return (
        <NavigationContainer
         // initialRouteName={initialRouteName} 
         screenOptions={screenOptions}>
          <Stack.Navigator>
            <Stack.Screen name="EntryScreen" component={EntryScreen} options={navigationOptions} />
            <Stack.Screen name="TabScreen" component={TabScreen} options={navigationOptions} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
