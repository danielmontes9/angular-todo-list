import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  validateForm!: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      task: ['', []]
    });
  }

  get addTaskControlValue() {
    return this.validateForm.value.task;
  }

  addTask(): void {
    this.tasks = [...this.tasks, this.addTaskControlValue];
  }

}
