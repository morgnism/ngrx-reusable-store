import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as NatureActions from './actions';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotoType } from 'src/app/models/photo';
import { NaturePhotosService } from 'src/app/data/nature-photos.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '..';

@Injectable({ providedIn: 'root' })
export class NatureEffects {
  loadNature$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NatureActions.loadNaturePhotos),
      withLatestFrom(this.store.select(fromTopics.selectAllTopics)),
      map(
        ([_, topics]) =>
          topics.find((t) => t.slug === PhotoType.Nature).links.photos
      ),
      switchMap((url: string) =>
        this.naturePhotosService.getNature(url).pipe(
          map((nature) => NatureActions.loadNaturePhotosSuccess({ nature })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private naturePhotosService: NaturePhotosService
  ) {}
}
