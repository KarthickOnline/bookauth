import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myfirsthttp';

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyDL-D-6P2WiqXhEIAvkt_jlKOitPW-Ft14",
      authDomain: "bookauth-846f9.firebaseapp.com",
      databaseURL: "https://bookauth-846f9-default-rtdb.firebaseio.com",
      projectId: "bookauth-846f9",
      storageBucket: "bookauth-846f9.appspot.com",
      messagingSenderId: "762840108364",
      appId: "1:762840108364:web:67422c86d6e9439ed813e9",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  onLogOut(){
    this._auth.logOut();
  }
}
