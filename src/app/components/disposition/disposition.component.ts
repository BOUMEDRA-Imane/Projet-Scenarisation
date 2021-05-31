import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase'
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
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
  saveimg:any="assets/img/save.png";
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
  userId
  private auth = firebase.auth();
  fetchedData:any={disposition:"",time1:0,time2:0,story:""}
  constructor(@Inject(MAT_DIALOG_DATA) public data: {capsuleId: string,sceneId:string},private dialogRef:MatDialog,private route: ActivatedRoute,public db:AngularFirestore) {  
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
      }
      if(data && data.capsuleId && data.sceneId){
        this.db.collection("users").doc(this.userId).collection("capsules").doc(data.capsuleId).collection("scenes").doc(data.sceneId).valueChanges().subscribe(res=>{
          console.log("jh",res)
          this.fetchedData=res
        })
      }
    })
  }
  onNoPop(): void {
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
  }

  save(capsuleForm){
    console.log(capsuleForm.value)
   if(this.data && this.data.capsuleId && this.data.sceneId){
    this.db.collection("users").doc(this.userId).collection("capsules").doc(this.data.capsuleId).collection("scenes").doc(this.data.sceneId).set(capsuleForm.value)
   }else{
    this.db.collection("users").doc(this.userId).collection("capsules").doc(this.data.capsuleId).collection("scenes").add(capsuleForm.value)
   }
    this.onNoPop()
  }

  

}
