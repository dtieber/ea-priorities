import {Action, UPDATE} from '@ngrx/store';
import { Epic } from '../models/epic';


export enum EpicActionTypes {
  FETCH = '[Epic] Fetch',
  FETCH_COMPLETE = '[Epic] Fetch Complete',
  UPDATE = '[Epic] Update',
  UPDATE_COMPLETE = '[Epic] Update Complete',
  DONE = '[Epic] Done',
  DONE_COMPLETE = '[Epic] Done Complete',
  UNDONE = '[Epic] Undone',
  UNDONE_COMPLETE = '[Epic] Undone Complete',
  DELETE = '[Epic] Delete',
  DELETE_COMPLETE = '[Epic] Delete Complete',
  CREATE = '[Epic] Create',
  CREATE_COMPLETE = '[Epic] Create Complete',
}

export class FetchEpicsAction implements Action {
  readonly type = EpicActionTypes.FETCH;
  constructor() { }
}

export class FetchEpicsCompleteAction implements Action {
  readonly type = EpicActionTypes.FETCH_COMPLETE;
  constructor(public payload: Epic[]) { }
}

export class UpdateEpicsAction implements Action {
  readonly type = EpicActionTypes.UPDATE;
  constructor(public payload: Epic[]) { }
}

export class UpdateEpicsCompleteAction implements Action {
  readonly type = EpicActionTypes.UPDATE_COMPLETE;
  constructor(public payload: Epic[]) { }
}

export class DoneEpicAction implements Action {
  readonly type = EpicActionTypes.DONE;
  constructor(public payload: Epic) { }
}

export class DoneCompleteEpicAction implements Action {
  readonly type = EpicActionTypes.DONE_COMPLETE;
  constructor(public payload: Epic) { }
}

export class UndoneEpicAction implements Action {
  readonly type = EpicActionTypes.UNDONE;
  constructor(public payload: Epic) { }
}

export class UndoneCompleteEpicAction implements Action {
  readonly type = EpicActionTypes.UNDONE_COMPLETE;
  constructor(public payload: Epic) { }
}

export class DeleteEpicAction implements Action {
  readonly type = EpicActionTypes.DELETE;
  constructor(public payload: Epic) { }
}

export class DeleteCompleteEpicAction implements Action {
  readonly type = EpicActionTypes.DELETE_COMPLETE;
  constructor(public payload: Epic) { }
}

export class CreateEpicAction implements Action {
  readonly type = EpicActionTypes.CREATE;
  constructor(public payload: Epic) { }
}

export class CreateCompleteEpicAction implements Action {
  readonly type = EpicActionTypes.CREATE_COMPLETE;
  constructor(public payload: Epic) { }
}

export type Actions
  = FetchEpicsAction
  | FetchEpicsCompleteAction
  | UpdateEpicsAction
  | UpdateEpicsCompleteAction
  | DoneEpicAction
  | DoneCompleteEpicAction
  | UndoneEpicAction
  | UndoneCompleteEpicAction
  | CreateEpicAction
  | CreateCompleteEpicAction
  | DeleteEpicAction
  | DeleteCompleteEpicAction;
