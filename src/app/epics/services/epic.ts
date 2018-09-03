import {Injectable} from '@angular/core';
import {Epic} from "../models/epic";
import {CreateEpicAction, DeleteEpicAction, DoneEpicAction, UndoneEpicAction} from "../actions/epic";


@Injectable()
export class EpicService {
  private API_PATH = '....';

  constructor() {}

  fetchAll(): Epic[] {
    let epics: Epic[] = [
      {id: 1, priority: 2, name: "asdas", notes: "medium asdasd sd sasod asdh adohas doih aodi adoi said asdsad", estimatedDuration: 3, done: false},
      {id: 2, priority: 3, name: "qweqwe", notes: "low asdasd sd sasod asdh adohas doih aodi adoi said asdsad", estimatedDuration: 2, done: false},
      {id: 3, priority: 1, name: "rtyrty", notes: "top asdasd sd sasod asdh adohas doih aodi adoi said asdsad", estimatedDuration: 4, done: false},
      {id: 4, priority: 4, name: "rtyrty", notes: "very low asdasd sd sasod asdh adohas doih aodi adoi said asdsad", estimatedDuration: 3, done: true}
    ];
    return epics;
  }

  create(action: CreateEpicAction) {
    //todo
    let epic = action.payload;
    return epic;
  }

  complete(action: DoneEpicAction) {
    //todo
    let epic = action.payload;
    epic.done = true;
    return epic;
  }

  reopen(action: UndoneEpicAction) {
    //todo
    let epic = action.payload;
    epic.done = false;
    return epic;
  }

  delete(action: DeleteEpicAction) {
    //todo
    let epic = action.payload;
    return epic;
  }
}
