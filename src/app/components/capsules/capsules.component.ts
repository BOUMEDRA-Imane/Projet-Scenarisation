import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { map } from 'rxjs/operators';
import firebase from 'firebase'
@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {
  cheminImage1:any="assets/img/plus.png";
  capsules=[]
  userId
  private auth = firebase.auth();
  constructor(private dialogRef:MatDialog,public db:AngularFirestore) { 
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
        this.db.collection("users").doc(this.userId).collection("capsules").snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        ).subscribe(res=>{
          this.capsules=res
        })
      }
    })
  }
    openDialog(){
      this.dialogRef.open(PopUpComponent)
    }
    onNoClick(): void {
      this.dialogRef.closeAll();
    }
  ngOnInit(): void {
   
  }


  editDialog(capsuleId){
    this.dialogRef.open(PopUpComponent,{
      data: { capsuleId: capsuleId,userId:this.userId },
    })
  }


  delete(capsuleId){
    this.db.collection("users").doc(this.userId).collection("capsules").doc(capsuleId).delete()
  }

}
