import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SecondPageComponent,
    CreateAccountComponent,
    CapsulesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }