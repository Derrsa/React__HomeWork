import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import configReducer from "./configuration/configSlice.ts";
import questionsReducer from "./questions/questionsSlice.tsx";
import gameInfoReducer from "./gameInfo/gameInfoSlice.ts";
import statisticReducer from "./statistic/statisticSlice.tsx";

const rootReducer = combineReducers({
  config: configReducer,
  questions: questionsReducer,
  gameInfo: gameInfoReducer,
  statistic: statisticReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["statistic"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
