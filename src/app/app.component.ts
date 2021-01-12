import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app3';


  
  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyDz4oKqFl2ZLCMPMxSEm8HqzJiYCAn-2L8",
      authDomain: "insta-clone-b60a4.firebaseapp.com",
      projectId: "insta-clone-b60a4",
      storageBucket: "insta-clone-b60a4.appspot.com",
      messagingSenderId: "327084872412",
      appId: "1:327084872412:web:3e16966051d7720d7fda19",
      measurementId: "G-LQYDQHL46S"

    };


    firebase.default.initializeApp(firebaseConfig);
    
  }
}
