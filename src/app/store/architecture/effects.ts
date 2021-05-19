import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ArchitectureActions from './actions';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotoType } from 'src/app/models/photo';
import { ArchitecturePhotosService } from 'src/app/data/architecture-photos.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '..';

@Injectable({ providedIn: 'root' })
export class ArchitectureEffects {
  loadArchitecture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTopics.loadTopicsSuccess),
      withLatestFrom(this.store.select(fromTopics.selectAllTopics)),
      map(
        ([_, topics]) =>
          topics.find((t) => t.slug === PhotoType.Architecture).links.photos
      ),
      switchMap((url: string) =>
        this.architecturePhotosService.getArchitecture(url).pipe(
          map((architecture) =>
            ArchitectureActions.loadArchitecturePhotosSuccess({ architecture })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private architecturePhotosService: ArchitecturePhotosService
  ) {}
}
