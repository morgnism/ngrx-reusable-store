import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';

// Photos
import * as fromPeople from './people';
import * as fromNature from './nature';
import * as fromArchitecture from './architecture';
import * as fromFashion from './fashion';
import * as fromWallpapers from './wallpapers';
export * from './people';
export * from './nature';
export * from './architecture';
export * from './fashion';
export * from './wallpapers';

// Topics
import * as fromTopics from './topics';
export * from './topics';

export interface ApplicationState {
  people: fromPeople.PeopleState;
  nature: fromNature.NatureState;
  architecture: fromArchitecture.ArchitectureState;
  fashion: fromFashion.FashionState;
  wallpapers: fromWallpapers.WallpapersState;
  topics: fromTopics.TopicsState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  people: fromPeople.peopleReducer,
  nature: fromNature.natureReducer,
  architecture: fromArchitecture.architectureReducer,
  fashion: fromFashion.fashionReducer,
  wallpapers: fromWallpapers.wallpapersReducer,
  topics: fromTopics.topicsReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] =
  !environment.production ? [storeFreeze] : [];

export const effects = [
  fromPeople.PeopleEffects,
  fromNature.NatureEffects,
  fromArchitecture.ArchitectureEffects,
  fromFashion.FashionEffects,
  fromWallpapers.WallpapersEffects,
  fromTopics.TopicsEffects,
];
