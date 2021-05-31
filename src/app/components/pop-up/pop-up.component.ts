import { Component, OnInit,Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase'
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  userId
  private auth = firebase.auth();
  fetchedData:any={capsule:"",filiere:"",matiere:""}
  constructor(@Inject(MAT_DIALOG_DATA) public data: {userId: string,capsuleId:string},private dialogRef:MatDialog,private route: ActivatedRoute,public db:AngularFirestore) {  
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
      }
      if(data && data.capsuleId){
        this.db.collection("users").doc(this.userId).collection("capsules").doc(data.capsuleId).valueChanges().subscribe(res=>{
          console.log("jh",res)
          this.fetchedData=res
        })
      }
    })
  }
    onNoClick(): void {
      this.dialogRef.closeAll();
    }
   

  ngOnInit(): void {
  }

  save(capsuleForm){
    console.log(capsuleForm.value)
   if(this.data && this.data.capsuleId){
    this.db.collection("users").doc(this.userId).collection("capsules").doc(this.data.capsuleId).set(capsuleForm.value)
   }else{
    this.db.collection("users").doc(this.userId).collection("capsules").add(capsuleForm.value)
   }
    this.onNoClick()
  }

}
