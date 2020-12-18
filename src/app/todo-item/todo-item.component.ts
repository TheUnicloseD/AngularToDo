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

  itemEdit() {
    this.edit = true;
    console.log(this.edit)
  }

  itemLabel(label: string) {
    if (label) {
      this.todoService.setItemsLabel(label, this.itemData);
    }
    else {
      this.todoService.removeItems(this.itemData);
    }
  }

}
