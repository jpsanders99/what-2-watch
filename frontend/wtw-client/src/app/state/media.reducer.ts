import { createReducer, on } from "@ngrx/store";
import { Media } from "../models/media.model";
import { MediaApiActions } from "./media.actions";

export const initialState: Array<Media> = [];

export const mediaReducer = createReducer(
    initialState,
    on(MediaApiActions.retrievedMediaList, (_state, { media }) => media)
);