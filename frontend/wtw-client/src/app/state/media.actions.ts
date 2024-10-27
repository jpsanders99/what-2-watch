import { createActionGroup, props } from "@ngrx/store";
import { Media } from "../models/media.model";

export const MediaApiActions = createActionGroup({
    source: 'Media API',
    events: {
        'Retrieved Media List': props<{ media: Array<Media> }>(),
    },
});