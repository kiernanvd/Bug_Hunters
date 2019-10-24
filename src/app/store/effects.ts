import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { BugsService } from '../bugs.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadBugs$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.bugsService.getAll().pipe(
        map(bugs => {
          return { type: ActionTypes.LoadSuccess, payload: bugs };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bugsService: BugsService
  ) {}
}
