import { createReducer, on } from '@ngrx/store';
import { Photo, PhotoType } from '../../models/photo';
import * as PhotoActions from './actions';

export interface PhotoState {
  photos: Photo[];
  isLoaded: boolean;
  isLoading: boolean;
}
export interface PhotoTypeState {
  [photoType: string]: PhotoState;
}

/**
 * Creates the initial persisted state:
 * {
 *  People: [],
 *  Nature: [],
 *  ...
 * }
 */
export const INITIAL_PHOTO_TYPE_STATES: PhotoTypeState = Object.keys(
  PhotoType
).reduce((acc, val) => {
  acc[PhotoType[val]] = [];
  return acc;
}, {});

export type PhotosState = PhotoTypeState & {
  selectedPhotoType: PhotoType; // for selecting the right photo store
};

/**
 * Initialize the default photo type.
 *
 * NOTE: we have to assign an initial value in this
 * example's load strategy so our selector doesn't read
 * the state as `undefined`.
 *
 * Because we used an indexed type, we would have to
 * force type properties to `any` to avoid type conflicts.
 *
 * To get around an initial value and use `null`, change
 * your load to one that makes sense for yout app.
 */
export const INITIAL_PHOTOS_STATE: PhotosState = {
  selectedPhotoType: PhotoType.People as any,
  ...INITIAL_PHOTO_TYPE_STATES,
};

export const photosReducer = createReducer(
  INITIAL_PHOTOS_STATE,
  on(PhotoActions.loadPhotoSuccess, (state, { photos }) => ({
    ...state,
    [state.selectedPhotoType]: {
      ...state[state.selectedPhotoType],
      photos,
      isLoaded: true,
      isLoading: false,
    },
  })),
  on(PhotoActions.setActivePhotoType, (state, { photoType }) => ({
    ...state,
    selectedPhotoType: photoType as any,
  }))
);
