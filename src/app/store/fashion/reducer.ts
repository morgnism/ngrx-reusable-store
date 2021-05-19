import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Fashion } from '../../models/photo';
import * as FashionActions from './actions';

export interface FashionState extends EntityState<Fashion> {
  isLoaded: boolean;
  isLoading: boolean;
}

const adapter: EntityAdapter<Fashion> = createEntityAdapter({});

export const INITIAL_FASHION_STATE: FashionState = adapter.getInitialState({
  isLoading: false,
  isLoaded: false,
});

export const fashionReducer = createReducer(
  INITIAL_FASHION_STATE,
  on(FashionActions.loadFashionPhotosSuccess, (state, { fashion }) =>
    adapter.setAll(fashion, state)
  )
);

// select array of topics
export const { selectAll: selectAllFashionPhotosArray } =
  adapter.getSelectors();
