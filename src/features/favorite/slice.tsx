import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

type TState = [{
    id: number,
    img?: string,
    type: string,
    name: string,
    url?: string
}]

type TargetType = WritableDraft<{ id: number; img?: string; type: string; name: string; url?: string; }[]>;
const initialState: TargetType = [] as unknown as TState;

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<any>) => {
            const itemId = action.payload;
            // Verifica se o item já está nos favoritos antes de adicionar
            if (!state.includes(itemId)) {
                state.push(itemId);
            }
        },
        remove: (state, action: PayloadAction<any>) => {
            const itemId = action.payload;
            // Filtra o array para manter apenas os itens que não correspondem ao ID removido
            state = state.filter((item) => item.id != itemId);
        },
    },
});

export const { add, remove } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
