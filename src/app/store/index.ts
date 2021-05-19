import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { photosReducer, PhotosState } from './photos';
import { topicsReducer, TopicsState } from './topics';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';

// Photos
export * from './photos';

// Topics
export * from './topics';

export interface ApplicationState {
  photos: PhotosState;
  topics: TopicsState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  photos: photosReducer,
  topics: topicsReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [storeFreeze] : [];
