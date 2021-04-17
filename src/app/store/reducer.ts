import { createReducer, on } from '@ngrx/store';
import { Photo, PhotoType } from '../models/photo';
import * as PhotoActions from './actions';

export interface PhotoTypeState {
  [assetType: string]: Photo[];
}

export const INITIAL_PHOTO_TYPE_STATES: PhotoTypeState = Object.keys(
  PhotoType
).reduce((acc, val) => {
  acc[PhotoType[val]] = [];
  return acc;
}, {});

export type PhotosState = PhotoTypeState & {
  selectedPhotoType: PhotoType;
  isLoaded: boolean;
  isLoading: boolean;
};

export const INITIAL_PHOTOS_STATE: PhotosState = {
  selectedPhotoType: null,
  isLoaded: null,
  isLoading: null,
  ...INITIAL_PHOTO_TYPE_STATES,
};

export const photosReducer = createReducer(
  INITIAL_PHOTOS_STATE,
  on(PhotoActions.loadPhotoSuccess, (state, { photos }) => ({
    ...state,
    [state.selectedPhotoType]: photos,
  }))
);
