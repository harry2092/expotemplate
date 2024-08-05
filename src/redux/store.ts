import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, Middleware } from "redux";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/appSlice";

const reducers = combineReducers({
appSlice
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userData"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return middlewares;
  },
});
store.subscribe(() => {
  // console.log("Store", store.getState())
});
const persistor = persistStore(store);
export { store, persistor };
