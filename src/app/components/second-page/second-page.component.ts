import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DispositionComponent } from '../disposition/disposition.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import firebase from 'firebase'
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  userId
  selectedCapsule=null
  private auth = firebase.auth();
  faTrash = faTrash;
  faPencil = faPen;

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

    capsuleId=""
    scenes=[]
  constructor(private dialogRef:MatDialog,public route:ActivatedRoute,public db:AngularFirestore) { 
    this.capsuleId=this.route.snapshot.paramMap.get("capsuleId")
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
        this.db.collection("users").doc(this.userId).collection("capsules").doc(this.capsuleId).collection("scenes").snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        ).subscribe(res=>{
          this.scenes=res
        })
        this.db.collection("users").doc(this.userId).collection("capsules").doc(this.capsuleId).snapshotChanges().pipe(
          map(a => {
            const data = a.payload.data() as any;
            const id = a.payload.id;
            return { id, ...data };
          })
        ).subscribe(res=>{
          this.selectedCapsule=res
        })
      }
    })
  }
  openDialog(){
    this.dialogRef.open(DispositionComponent,{data: { capsuleId: this.capsuleId }})
  }
  onNoPop():void{
    this.dialogRef.closeAll();
  }
  ngOnInit(): void {
    
  }

  editDialog(sceneId){
    this.dialogRef.open(DispositionComponent,{
      data: { capsuleId: this.capsuleId,sceneId:sceneId },
    })
  }


  delete(sceneId){
    console.log("jhj")
    this.db.collection("users").doc(this.userId).collection("capsules").doc(this.capsuleId).collection("scenes").doc(sceneId).delete()
  }

}
