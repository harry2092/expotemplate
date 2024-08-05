
import React, { useContext } from "react";
import { View, Text} from "react-native";
import { styles } from "./style";
import { LocalizationContext } from "@helpers/localization";
import { useTheme } from "@react-navigation/native";

export default function Login() {
  const { localization } = useContext(LocalizationContext);
  const {colors} = useTheme()
  return (
    <View style={styles.root}>
      <Text style={styles.welcome}>{localization.appkeys.welcome_solid}</Text>
    </View>
  );
}


