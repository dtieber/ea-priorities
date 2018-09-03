import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {
  CreateCompleteEpicAction,
  CreateEpicAction,
  DeleteCompleteEpicAction,
  DeleteEpicAction,
  DoneCompleteEpicAction,
  DoneEpicAction,
  EpicActionTypes,
  FetchEpicsCompleteAction, UndoneCompleteEpicAction, UndoneEpicAction
} from "../actions/epic";
import {EpicService} from "../services/epic";

@Injectable()
export class EpicEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(EpicActionTypes.FETCH),
    switchMap(() => {
      return of(new FetchEpicsCompleteAction(this.svc.fetchAll()))
    })
  );

  @Effect()
  complete$: Observable<Action> = this.actions$.pipe(
    ofType(EpicActionTypes.DONE),
    switchMap((action: DoneEpicAction) => {
      return of(new DoneCompleteEpicAction(this.svc.complete(action)))
    })
  );

  @Effect()
  reopen$: Observable<Action> = this.actions$.pipe(
    ofType(EpicActionTypes.UNDONE),
    switchMap((action: UndoneEpicAction) => {
      return of(new UndoneCompleteEpicAction(this.svc.reopen(action)))
    })
  );

  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType(EpicActionTypes.DELETE),
    switchMap((action: DeleteEpicAction) => {
      return of(new DeleteCompleteEpicAction(this.svc.delete(action)))
    })
  );
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(EpicActionTypes.CREATE),
    switchMap((action: CreateEpicAction) => {
      return of(new CreateCompleteEpicAction(this.svc.create(action)))
    })
  );


  constructor(private svc: EpicService, private actions$: Actions) {}
}
