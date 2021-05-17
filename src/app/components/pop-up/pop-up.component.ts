import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private dialogRef:MatDialog,private route: ActivatedRoute) {  
  }
    onNoClick(): void {
      this.dialogRef.closeAll();
    }
   

  ngOnInit(): void {
  }

}
