import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from "./reducers/epic";
import {EpicsListComponent} from "./components/epics-list-component";
import {EpicService} from "./services/epic";
import {EpicEffects} from "./effects/epic";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule
} from "@angular/material";
import {OrderModule} from "ngx-order-pipe";
import {FilterPipeModule} from "ngx-filter-pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddEpicComponent} from "./components/add-epic-component";
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forFeature('epics', reducer),
    EffectsModule.forFeature([EpicEffects]),
    OrderModule,
    FilterPipeModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    EpicsListComponent,
    AddEpicComponent
  ],
  providers: [
    EpicService,
  ],
  exports: [
    EpicsListComponent
  ],
  entryComponents: [
    AddEpicComponent
  ]
})
export class EpicsModule {}
