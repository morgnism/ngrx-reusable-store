import { createAction, props } from '@ngrx/store';
import { Topic } from 'src/app/models/topics';

export const loadTopics = createAction('[TOPICS] Load Topic');

export const loadTopicsSuccess = createAction(
  '[TOPICS] Load Topic Success',
  props<{ topics: Topic[] }>()
);

export const loadTopicsFailed = createAction(
  '[TOPICS] Load Topic Failed',
  props<{ error: any }>()
);
