import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Topic } from 'src/app/models/topics';
import { TopicsState, selectAllTopicsArray } from './reducer';

export const topicsState = createFeatureSelector<TopicsState>('topics');

export const selectAllTopics = createSelector(
  topicsState,
  selectAllTopicsArray
);
