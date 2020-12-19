import { HostListener, Injectable } from '@angular/core';
import {TodoListData} from './dataTypes/TodoListData';
import {Observable, BehaviorSubject} from 'rxjs';
import {TodoItemData} from './dataTypes/TodoItemData';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

@Injectable()
export class TodoService {

  private todoListSubject = new BehaviorSubject<TodoListData>( {label: 'TodoList', items: []} );
  myAngularxQrCode: string;
  constructor() { }

  getTodoListDataObservable(): Observable<TodoListData> {
    return this.todoListSubject.asObservable();
  }

  setItemsLabel(label: string, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label, isDone: I.isDone}) )
    });
    localStorage.setItem("todoList", JSON.stringify(this.todoListSubject.getValue().items));
  }

  setItemsDone(isDone: boolean, ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label,
      items: tdl.items.map( I => items.indexOf(I) === -1 ? I : ({label: I.label, isDone}) )
    });
    localStorage.setItem("todolist", JSON.stringify(this.todoListSubject.getValue().items));
  }

  appendItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: [...tdl.items, ...items]
    });
    localStorage.setItem("todolist", JSON.stringify(this.todoListSubject.getValue().items));
  }

  removeItems( ...items: TodoItemData[] ) {
    const tdl = this.todoListSubject.getValue();
    this.todoListSubject.next( {
      label: tdl.label, // ou on peut écrire: ...tdl,
      items: tdl.items.filter( I => items.indexOf(I) === -1 )
    });
    localStorage.setItem("todolist", JSON.stringify(this.todoListSubject.getValue().items));
  }

  // générer un QR code avec les valeurs de notre todo list
  createQrcode() {
    console.log("QR")
    const localStorageItems = localStorage.getItem("todolist")
    this.myAngularxQrCode = JSON.stringify(localStorageItems);
    console.log(this.myAngularxQrCode)
  }

  // fixer la valeur du QR Code à vide pour que il disparaisse de notre appli
  cacherQrcode() {
    this.myAngularxQrCode = '';
  }

  // Créer un nouvel utilisateur dans notre base Firebase
  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

// Connecter un utilisateur à notre appli si il a deja créer un compte preceddement
signInUser(email: string, password: string) {
  return new Promise<void>(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

// Deconnecter l'utilisateur de notre application.
signOutUser() {
  firebase.auth().signOut();
}



}
