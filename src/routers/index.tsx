import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "../helpers/customRouter";
import { ScreenOptions } from "@utils/ScreenOptions";
import Routes, { RootStackParams } from "@utils/Routes";
import { DarkTheme, LightTheme } from "@styles/theme";
import Login from "@screens/Login/Login";
import { useColorScheme } from "react-native";

enableScreens();

const Stack = createStackNavigator<RootStackParams>();

function RootNavigation() {
  const theme = useColorScheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={theme == "dark" ? DarkTheme : LightTheme}>
        <Stack.Navigator
          initialRouteName={Routes.Login}>
              <Stack.Screen
                name={Routes.Login}
                component={Login}
                options={{ headerShown: false }}
              />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;

