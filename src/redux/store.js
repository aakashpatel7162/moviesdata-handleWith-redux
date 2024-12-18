import { configureStore } from '@reduxjs/toolkit';
import moviesDataSlice from './reducer'; 

import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'; 

const perSisConfig = {
    key: "root",
    storage: sessionStorage,
};

const persistedReducer = persistReducer(perSisConfig, moviesDataSlice); 

const store = configureStore({
    reducer: {
        movies: persistedReducer, 
    },
});

const persistor = persistStore(store);

export { store, persistor };
