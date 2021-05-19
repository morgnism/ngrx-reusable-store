import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Nature } from '../../models/photo';
import * as NatureActions from './actions';

export interface NatureState extends EntityState<Nature> {
  isLoaded: boolean;
  isLoading: boolean;
}

const adapter: EntityAdapter<Nature> = createEntityAdapter({});

export const INITIAL_NATURE_STATE: NatureState = adapter.getInitialState({
  isLoading: false,
  isLoaded: false,
});

export const natureReducer = createReducer(
  INITIAL_NATURE_STATE,
  on(NatureActions.loadNaturePhotosSuccess, (state, { nature }) =>
    adapter.setAll(nature, state)
  )
);

// select array of topics
export const { selectAll: selectAllNaturePhotosArray } = adapter.getSelectors();
