import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PeopleActions from './actions';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as fromTopics from '../topics';
import { PhotoType } from 'src/app/models/photo';
import { PeoplePhotosService } from 'src/app/data/people-photos.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '..';

@Injectable({ providedIn: 'root' })
export class PeopleEffects {
  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.loadPeoplePhotos),
      withLatestFrom(this.store.select(fromTopics.selectAllTopics)),
      map(
        ([_, topics]) =>
          topics.find((t) => t.slug === PhotoType.People).links.photos
      ),
      switchMap((url: string) =>
        this.peoplePhotosService.getPeople(url).pipe(
          map((people) => PeopleActions.loadPeoplePhotosSuccess({ people })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadPhotosFromTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromTopics.loadTopicsSuccess),
      map(
        ({ topics }) =>
          topics.find((t) => t.slug === PhotoType.People).links.photos
      ),
      switchMap((url: string) =>
        this.peoplePhotosService.getPeople(url).pipe(
          map((people) => PeopleActions.loadPeoplePhotosSuccess({ people })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private peoplePhotosService: PeoplePhotosService
  ) {}
}
