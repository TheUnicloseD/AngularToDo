import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TodoItemData } from '../dataTypes/TodoItemData';
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() private todoItem: TodoItemData;
  private edit: boolean;

  constructor(private todoService: TodoService) { }
  
  // fixer l'edit sur faux lors du démarrage de l'application
  ngOnInit() {
    this.edit = false;
    console.log(this.edit)
  }

  get itemData(): TodoItemData {
    return this.todoItem;
  }

  itemDone(done:boolean) {
    this.todoService.setItemsDone(done, this.itemData);
  }

  itemDelete() {
    this.todoService.removeItems(this.itemData)
  }

  // fixer l'edit sur vrai lorsque l'on double click sur une tache 
  itemEdit() {
    this.edit = true;
  }

  // lors de l'edit d'un label, sauvegarder la nouvelle valeur ou supprimer la tache si la nouvelle valeur est vide
  itemLabel(label: string) {
    if (label) {
      this.todoService.setItemsLabel(label, this.itemData);
    }
    else {
      this.todoService.removeItems(this.itemData);
    }
  }

}
