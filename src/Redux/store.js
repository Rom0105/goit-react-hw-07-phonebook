import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, loading } from './contact-reducer';
import { filter } from './filter/ContactFilterReducer';
// import { contactApi } from './contactsApi';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    // [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactApi.middleware,
  // ],
});

// setupListeners(store.dispatch);
