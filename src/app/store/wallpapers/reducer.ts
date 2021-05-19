import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Wallpapers } from '../../models/photo';
import * as WallpapersActions from './actions';

export interface WallpapersState extends EntityState<Wallpapers> {
  isLoaded: boolean;
  isLoading: boolean;
}

const adapter: EntityAdapter<Wallpapers> = createEntityAdapter({});

export const INITIAL_WALLPAPERS_STATE: WallpapersState =
  adapter.getInitialState({
    isLoading: false,
    isLoaded: false,
  });

export const wallpapersReducer = createReducer(
  INITIAL_WALLPAPERS_STATE,
  on(WallpapersActions.loadWallpapersPhotosSuccess, (state, { wallpapers }) =>
    adapter.setAll(wallpapers, state)
  )
);

// select array of topics
export const { selectAll: selectAllWallpapersPhotosArray } =
  adapter.getSelectors();
