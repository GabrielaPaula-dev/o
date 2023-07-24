import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            // Verifica se o item já está nos favoritos antes de adicionar
            if (!state.includes(itemId)) {
                state.push(itemId);
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            // Filtra o array para manter apenas os itens que não correspondem ao ID removido
            state = state.filter((id) => id !== itemId);
        },
    },
});

export const { add, remove } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
