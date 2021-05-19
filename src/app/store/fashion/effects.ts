import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FashionActions from './actions';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotoType } from 'src/app/models/photo';
import { FashionPhotosService } from 'src/app/data/fashion-photos.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '..';

@Injectable({ providedIn: 'root' })
export class FashionEffects {
  loadFashion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FashionActions.loadFashionPhotos),
      withLatestFrom(this.store.select(fromTopics.selectAllTopics)),
      map(
        ([_, topics]) =>
          topics.find((t) => t.slug === PhotoType.Fashion).links.photos
      ),
      switchMap((url: string) =>
        this.fashionPhotosService.getFashion(url).pipe(
          map((fashion) =>
            FashionActions.loadFashionPhotosSuccess({ fashion })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private fashionPhotosService: FashionPhotosService
  ) {}
}
