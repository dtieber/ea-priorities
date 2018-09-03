import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'add-epic-dialog',
  templateUrl: 'add-epic-component.html',
  styleUrls: ['./add-epic-component.css']
})
export class AddEpicComponent implements OnInit {

  epicData: DialogData = {title: '', description: ''};

  constructor(private dialogRef: MatDialogRef<AddEpicComponent>) {}

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.epicData = {title: '', description: ''};
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.epicData)
  }

}
