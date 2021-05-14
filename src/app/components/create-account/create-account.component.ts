import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  logo:any="assets/img/logo1.png";

  // public civility: string;
  public auth = firebase.auth();
  public database = firebase.database().ref()
  public AuthForm = this.fb.group(
    {
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      academicEmail: ['',
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      civility: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

      // termsAndConditions: [false, Validators.required],
    },

  );
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }
  selectCivility(ev) {
    console.log('civility:', ev.target.value)
  }
  createAccount() {
    const {
      civility,
      confirmPassword,
      password,
      lastName,
      firstName,
      academicEmail,
      email
    } = this.AuthForm.value;
    const user = {
      civility,
      lastName,
      firstName,
      academicEmail,
      email
    }
    if (this.AuthForm.invalid) {
      alert('All fields required!')
    } else {

      if (password !== confirmPassword) {
        alert('Password dont match!')
      } else {
        this.auth.createUserWithEmailAndPassword(email, password).then(ev => {
          this.database.child(`users/${ev.user.uid}`).set(user).then(() => {
            alert('Account created!')
            this.route.navigate(['/home']);
          })
        }).catch(error => alert(error.message))
        console.log('civility', civility)
        console.log('confirmPassword', confirmPassword)
        console.log('password', password)
        console.log('lastName', lastName)
        console.log('firstName', firstName)
        console.log('academicEmail', academicEmail)
        console.log('email', email)
      }

    }
  }
}