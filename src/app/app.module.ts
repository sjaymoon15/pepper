import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDYi882vuOnrUBpMUlxc9-QEKr8rPWCCWQ",
    authDomain: "pepper-8b98c.firebaseapp.com",
    databaseURL: "https://pepper-8b98c.firebaseio.com",
    storageBucket: "pepper-8b98c.appspot.com",
    messagingSenderId: "491345027329"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
