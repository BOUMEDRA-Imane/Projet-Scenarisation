import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss']
})
export class DispositionComponent implements OnInit {
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
  constructor(private dialogRef:MatDialog,private route: ActivatedRoute) {  
  }
  onNoPop(): void {
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
  }

}
