import { Component } from '@angular/core';

interface Details {
  details: {
    lastUpdateItem?: number;
    totalItems?: number;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements Details {
  details = {
    lastUpdateItem: 0,
    totalItems: 0
  };
  todoList: Array<string> = [];

  onChangeList(todoList) {
    this.todoList.push(todoList);
    this.details.lastUpdateItem = todoList.generateDate;
    this.details.totalItems = this.todoList.length;
  }

  onDeleteItem(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.details.totalItems = this.todoList.length;
  }

  onChangeDate(date) {
    this.details.lastUpdateItem = date;
  }

  onRemoveAll(item) {
    this.todoList = [];
    this.details.totalItems = this.todoList.length;
  }
}
