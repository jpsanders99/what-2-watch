import { createFeatureSelector } from "@ngrx/store";
import { Media } from "../models/media.model";

export const selectMedia = createFeatureSelector<Array<Media>>('media');