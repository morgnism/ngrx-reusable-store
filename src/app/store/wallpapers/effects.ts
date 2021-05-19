import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WallpapersActions from './actions';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotoType } from 'src/app/models/photo';
import { WallpapersPhotosService } from 'src/app/data/wallpapers-photos.service';
import { ApplicationState } from '..';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class WallpapersEffects {
  loadWallpapers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WallpapersActions.loadWallpapersPhotos),
      withLatestFrom(this.store.select(fromTopics.selectAllTopics)),
      map(
        ([_, topics]) =>
          topics.find((t) => t.slug === PhotoType.Wallpapers).links.photos
      ),
      switchMap((url: string) =>
        this.wallpapersPhotosService.getWallpapers(url).pipe(
          map((wallpapers) =>
            WallpapersActions.loadWallpapersPhotosSuccess({ wallpapers })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private wallpapersPhotosService: WallpapersPhotosService
  ) {}
}
