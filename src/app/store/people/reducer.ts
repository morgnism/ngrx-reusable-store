import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { People } from '../../models/photo';
import * as PeopleActions from './actions';

export interface PeopleState extends EntityState<People> {
  isLoaded: boolean;
  isLoading: boolean;
}

const adapter: EntityAdapter<People> = createEntityAdapter({});

export const INITIAL_PEOPLE_STATE: PeopleState = adapter.getInitialState({
  isLoading: false,
  isLoaded: false,
});

export const peopleReducer = createReducer(
  INITIAL_PEOPLE_STATE,
  on(PeopleActions.loadPeoplePhotosSuccess, (state, { people }) =>
    adapter.setAll(people, state)
  )
);

// select array of topics
export const { selectAll: selectAllPeoplePhotosArray } = adapter.getSelectors();
