import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() detailList:Object;
  @Output() removeAllItems = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveAll() {
    this.removeAllItems.emit([]);
  }

}
