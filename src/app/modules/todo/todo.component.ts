import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Task } from 'src/app/core/models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  validateForm!: FormGroup;
  tasks: Task[] = [];
  copyStr = 'This is a copyable text.';

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
    const newTask: Task = {
      uuid: uuidv4(),
      title: this.addTaskControl.value,
    }
    this.tasks = [...this.tasks, newTask];
    this.validateForm.controls['task'].patchValue("");
    this.nzMessage.create("success", `La tarea ha sido agregada correctamente.`);
  }

}
