import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moviesData: [], 
};

const moviesDataSlice = createSlice({
    name: 'moviesData',
    initialState,
    reducers: {
        addMoviesData: (state, action) => {
            state.moviesData.push(action.payload);
        },
        removeMoviesData: (state, action) => {
            state.moviesData = state.moviesData.filter(movie => movie.id !== action.payload.id);
        },
        updateMoviesData: (state, action) => {
            const { id, taskName, taskDetail, completionDate } = action.payload;
            const index = state.moviesData.findIndex((movie) => movie.id === id);
            if (index !== -1) {
              state.moviesData[index] = { 
                ...state.moviesData[index], 
                taskName, 
                taskDetail, 
                completionDate 
              };
            }
        },
    },
});

export const { addMoviesData, removeMoviesData, updateMoviesData } = moviesDataSlice.actions;

export default moviesDataSlice.reducer;
