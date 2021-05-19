import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Photo, PhotoType } from '../../models/photo';
import * as PhotoActions from './actions';

export interface PhotoState extends EntityState<Photo> {
  isLoaded: boolean;
  isLoading: boolean;
}
export interface PhotoTypeState {
  [photoType: string]: PhotoState;
}

const adapter: EntityAdapter<Photo> = createEntityAdapter({});

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
  const state = adapter.getInitialState({
    isLoaded: false,
    isLoading: false,
  });
  acc[PhotoType[val]] = state;
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
    [state.selectedPhotoType]: adapter.setAll(photos, {
      ...state[state.selectedPhotoType],
      isLoaded: true,
      isLoading: true,
    }),
  })),
  on(PhotoActions.setActivePhotoType, (state, { photoType }) => ({
    ...state,
    selectedPhotoType: photoType as any,
  }))
);

export const { selectAll } = adapter.getSelectors();

// select an array of photos from the active photo type
export const selectAllActivePhotos = selectAll;
