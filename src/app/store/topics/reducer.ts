import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Topic } from 'src/app/models/topics';
import * as TopicActions from './actions';

export interface TopicsState extends EntityState<Topic> {
  isLoaded: boolean;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Topic> = createEntityAdapter<Topic>({});

export const INITIAL_TOPICS_STATE: TopicsState = adapter.getInitialState({
  isLoaded: false,
  isLoading: false,
});

export const topicsReducer = createReducer(
  INITIAL_TOPICS_STATE,
  on(TopicActions.loadTopicsSuccess, (state, { topics }) =>
    adapter.setAll(topics, state)
  )
);

const { selectEntities, selectAll } = adapter.getSelectors();

// select dictionary of topic entities
export const selectAllTopicsEntities = selectEntities;

// select array of topics
export const selectAllTopicsArray = selectAll;
