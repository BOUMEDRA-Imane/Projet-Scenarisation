import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo:any="assets/img/plus.png";
  logo1:any="assets/img/usmba.png"
  private auth = firebase.auth();
  public user: string;
  public isUser = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user.email;
        this.isUser = true;
      } else {
        this.user = '';
        this.isUser = false;
      }
    })
  }
  logOut() {
    this.auth.signOut().then(() => {
      this.user = ''
      this.isUser = false;
      this.route.navigate(['/']);
    })
  }
}