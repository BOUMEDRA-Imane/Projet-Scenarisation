import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {
  cheminImage1:any="assets/img/plus.png";

  constructor(private dialogRef:MatDialog) { }
    openDialog(){
      this.dialogRef.open(PopUpComponent)
    }
    onNoClick(): void {
      this.dialogRef.closeAll();
    }
  ngOnInit(): void {
  }

}
