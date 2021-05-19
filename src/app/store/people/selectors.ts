import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState, selectAllPeoplePhotosArray } from './reducer';

export const peopleState = createFeatureSelector<PeopleState>('people');

export const selectAllPeoplePhotos = createSelector(
  peopleState,
  selectAllPeoplePhotosArray
);

export const selectPeoplePhotosLoadedStatus = createSelector(
  peopleState,
  (state) => state.isLoaded
);
