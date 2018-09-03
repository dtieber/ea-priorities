import {Component, OnInit} from '@angular/core';
import {Epic} from "../models/epic";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs/internal/Observable";

import {State} from "../reducers/epic";
import {CreateEpicAction, DeleteEpicAction, DoneEpicAction, FetchEpicsAction, UndoneEpicAction} from "../actions/epic";
import {OrderPipe} from "ngx-order-pipe";
import {AddEpicComponent, DialogData} from "./add-epic-component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'ea-epics-list',
  styleUrls: ['./epics-list-component.css'],
  templateUrl: './epics-list-component.html'
})
export class EpicsListComponent implements OnInit {
  order: string = 'priority';
  filter = {done: false};
  filterToggleValues = { ALL: 'all', OPEN: 'open'};
  epics$: Observable<Epic>;

  constructor(private store: Store<State>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.epics$ = this.store.pipe(select('epics'));
    // todo remove manual subscription
    this.epics$.subscribe((x: any) => console.log('epics updates:', x.entities));
    this.fetch();
  }

  fetch() {
    this.store.dispatch(new FetchEpicsAction());
  }

  toggleFilter(newVal) {
    console.log('toggled', newVal);
    this.filter.done = (newVal == this.filterToggleValues.ALL) ? null : false;
  }

  done(epic: Epic) {
    this.store.dispatch(new DoneEpicAction(epic));
  }

  reopen(epic: Epic) {
    this.store.dispatch(new UndoneEpicAction(epic));
  }

  delete(epic: Epic) {
    this.store.dispatch(new DeleteEpicAction(epic));
  }

  openAddEpicDialog() {
    const dialogRef = this.dialog.open(AddEpicComponent, {width: '50%'});
    dialogRef.afterClosed().subscribe(result => {
      this.createEpicIfNeeded(result);
    });
  }

  createEpicIfNeeded(data: DialogData) {
    if(typeof data !== 'undefined') {
      this.createEpic(data);
    } else {
      console.log('cancelled')
    }
  }

  createEpic(data: DialogData) {
    let epic: Epic = {name: data.title, notes: data.description, priority: 10, done: false, id: 9, estimatedDuration: 0};
    this.store.dispatch(new CreateEpicAction(epic));
  }
}
