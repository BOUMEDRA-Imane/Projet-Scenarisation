import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public auth = firebase.auth();
  public AuthForm = this.fb.group(
    {
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      password: ['', Validators.required],

      // termsAndConditions: [false, Validators.required],
    },

  );
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }
  logIn() {
    const {
      email,
      password
    } = this.AuthForm.value;

    if (this.AuthForm.invalid) {
      alert('All fields required!')
    } else {

      this.auth.signInWithEmailAndPassword(email, password).then(ev => {
        this.route.navigate(['/second-page']);
      }).catch(error => alert(error.message))

    }
  }
  url = "./assets/img/font.jpg"
}
