import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() item:any;
  @Output('changes') change = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f) {
    f.value['generateDate'] = Date.now();
    this.change.emit(f.value);
    f.onReset();
  }

}
