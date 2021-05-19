import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArchitectureState, selectAllArchitecturePhotosArray } from './reducer';

export const architectureState =
  createFeatureSelector<ArchitectureState>('architecture');

export const selectAllArchitecturePhotos = createSelector(
  architectureState,
  selectAllArchitecturePhotosArray
);

export const selectArchitecturePhotosLoadedStatus = createSelector(
  architectureState,
  (state) => state.isLoaded
);
