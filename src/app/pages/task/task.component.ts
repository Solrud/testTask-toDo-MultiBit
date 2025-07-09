import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {JsonPipe} from '@angular/common';
import {TaskService} from '../../shared/data/dao/task.service';
import {Task} from '../../shared/model/task';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    JsonPipe,
    MatButton,
    RouterLink
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  readonly activatedRoute = inject(ActivatedRoute);
  readonly task = inject(TaskService);
  readonly currentTask = signal<Task | null>(null);

  ngOnInit() {
    this._getIdByUrl();
  }

  _getIdByUrl(): void {
    this.activatedRoute
      .paramMap
      .subscribe( paramMap => {
        const id = Number(paramMap.get('id'));

        this.toGetTaskById(id);
      })
  }

  toGetTaskById(id: number): void {
    this.task.get(id)
      .subscribe( task => {
        if (task){
          this.currentTask.set(task);
        }
    })
  }
}
