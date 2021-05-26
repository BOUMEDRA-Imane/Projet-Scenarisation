import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DispositionComponent } from '../disposition/disposition.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
    cheminImage1:any="assets/img/plus.png";
    cheminImage2:any="assets/img/plus.png";
    cheminImage3:any="assets/img/plus.png";
    disposition1:any="assets/img/dispo1.png";
    disposition2:any="assets/img/dispo2.png";
    disposition3:any="assets/img/dispo3.png";
    disposition4:any="assets/img/dispo4.png";
    disposition5:any="assets/img/dispo5.png";
    play:any="assets/img/play.png";
    save:any="assets/img/save.png";
    image=[
      'disposition1',
      'disposition2',
      'disposition3',
      'disposition4'
    ]
    capsule=[
      'cheminImage1',
      'cheminImage2',
      'cheminImage3',
    ]
  constructor(private dialogRef:MatDialog) { }
  openDialog(){
    this.dialogRef.open(DispositionComponent)
  }
  onNoPop():void{
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
    
  }

}
