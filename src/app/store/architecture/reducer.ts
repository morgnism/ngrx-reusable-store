import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Architecture } from '../../models/photo';
import * as ArchitectureActions from './actions';

export interface ArchitectureState extends EntityState<Architecture> {
  isLoaded: boolean;
  isLoading: boolean;
}

const adapter: EntityAdapter<Architecture> = createEntityAdapter({});

export const INITIAL_ARCHITECTURE_STATE: ArchitectureState =
  adapter.getInitialState({
    isLoading: false,
    isLoaded: false,
  });

export const architectureReducer = createReducer(
  INITIAL_ARCHITECTURE_STATE,
  on(
    ArchitectureActions.loadArchitecturePhotosSuccess,
    (state, { architecture }) => adapter.setAll(architecture, state)
  )
);

// select array of topics
export const { selectAll: selectAllArchitecturePhotosArray } =
  adapter.getSelectors();
