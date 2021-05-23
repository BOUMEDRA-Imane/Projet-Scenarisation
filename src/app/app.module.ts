import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import firebase from 'firebase';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SecondPageComponent,
    CreateAccountComponent,
    CapsulesComponent,
    PopUpComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    CreateAccountComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }