import {createSelector} from "@ngrx/store";

import {Epic} from "../models/epic";
import * as fromEpic from '../actions/epic';

export interface State {
  entities: Epic[];
}

export const initialState: State = {
  entities: [
  ]
}

export function reducer(state = initialState, action: fromEpic.Actions): State {
  switch (action.type) {

    case fromEpic.EpicActionTypes.FETCH_COMPLETE: {
      return {
        ...state,
        entities: (<fromEpic.FetchEpicsCompleteAction>action).payload
      }
    }

    case fromEpic.EpicActionTypes.DONE_COMPLETE:
    case fromEpic.EpicActionTypes.UNDONE_COMPLETE: {
      return {
        ...state,
        entities: state.entities.map((e) => {
          return (e.id===(<fromEpic.DoneCompleteEpicAction>action).payload.id)? action.payload : e
        })
      }
    }

    case fromEpic.EpicActionTypes.DELETE_COMPLETE: {
      return {
        ...state,
        entities: state.entities.filter((e) => e.id !== (<fromEpic.DeleteCompleteEpicAction>action).payload.id)
      }
    }

    case fromEpic.EpicActionTypes.CREATE_COMPLETE: {
      return {
        ...state,
        entities: state.entities.concat((<fromEpic.CreateCompleteEpicAction>action).payload)
      }
    }

    default: {
      return state;
    }
  }
}


export const getEntities = (state: State) => state.entities;
export const getAll = createSelector(getEntities, (entities) => {
  return entities;
});
