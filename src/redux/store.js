import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { stepperSlice } from './slices/stepper';
import { formSlice } from "./slices/form";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['stepper','formData'],
  };

  const appReducer = combineReducers({
    stepper: stepperSlice.reducer,
    formData: formSlice.reducer
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore specific action types or paths
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          ignoredPaths: ['register'],
        },
      }).concat(
        createStateSyncMiddleware({
          blacklist: ['persist/PERSIST', 'persist/REHYDRATE'],
        })
      ),
  });

  initMessageListener(store);
  
  export const persistor = persistStore(store);
  export default store;