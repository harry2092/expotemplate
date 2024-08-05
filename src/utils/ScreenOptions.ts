import {StackNavigationOptions } from "@react-navigation/stack";
import { Dimensions } from "react-native";

/**
 * Options for configuring the screen behavior and appearance.
 */
export const ScreenOptions: StackNavigationOptions = {
    gestureEnabled: true,
    gestureResponseDistance: Dimensions.get('screen').width,
    headerShown: false 
  };
  
