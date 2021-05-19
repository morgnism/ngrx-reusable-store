import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TopicsActions from './actions';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PhotosService } from 'src/app/data/photos.service';
import { Topic } from 'src/app/models/topics';

@Injectable({ providedIn: 'root' })
export class TopicsEffects {
  loadTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TopicsActions.loadTopics),
      switchMap(() =>
        this.photosService.getTopics().pipe(
          map((topics: Topic[]) => TopicsActions.loadTopicsSuccess({ topics })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}
}
