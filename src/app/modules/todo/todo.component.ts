import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  validateForm!: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder, private nzMessage: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      task: ['', []]
    });
  }

  get addTaskControl() {
    return this.validateForm.controls['task'] as FormGroup;
  }

  addTask(): void {
    this.tasks = [...this.tasks, this.addTaskControl.value];
    this.validateForm.controls['task'].patchValue("");
    this.nzMessage.create("success", `La tarea ha sido agregada correctamente.`);
  }

}
