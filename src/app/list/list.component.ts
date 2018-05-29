import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() allItems:Array<any>;
  @Output() itemToRemove = new EventEmitter;
  @Output() dateSelected = new EventEmitter;

  isSelected:boolean;
  itemSelected:object;

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveItem(item) {
    this.itemToRemove.emit(item);
  }

  onItemSelected(item) {
    this.isSelected = !this.isSelected;
    this.itemSelected = item;
    
    if (this.isSelected)
      this.dateSelected.emit(item.generateDate);
  }

}
