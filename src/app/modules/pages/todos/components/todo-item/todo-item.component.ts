import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/shared/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}