
import React, { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import {store} from './src/redux/store'
import RootNavigation from "./src/routers";
import CustomProvider from "./src/providers";

enableScreens();

function App() {

  return (

      <Provider store={store}>
        <CustomProvider>
          <RootNavigation />
        </CustomProvider>
      </Provider>

  );
}

export default App;
