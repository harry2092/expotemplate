import React from "react";
import { View, ActivityIndicator } from "react-native";
import type { GeneralActivityIndicatorProps } from "./type";

function GeneralActivityIndicator({ text }: GeneralActivityIndicatorProps) {


  // TODO Modal
  return (
    <View
    >
      <ActivityIndicator
        animating
        size="large"
       
      />
    </View>
  );
}

export default GeneralActivityIndicator;
