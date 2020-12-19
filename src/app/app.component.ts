import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoListData} from './dataTypes/TodoListData';
import {TodoItemData} from './dataTypes/TodoItemData';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
    apiKey: "AIzaSyAJ62MvGtLLafcp_1npP6GlRC2ciHIvLTg",
    authDomain: "todolist-f15da.firebaseapp.com",
    projectId: "todolist-f15da",
    storageBucket: "todolist-f15da.appspot.com",
    messagingSenderId: "393947727930",
    appId: "1:393947727930:web:a5be8a271158ce53afcd03",
    measurementId: "G-W49E34DSQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
