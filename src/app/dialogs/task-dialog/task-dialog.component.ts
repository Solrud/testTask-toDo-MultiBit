import {Component, inject, OnInit} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Task} from '../../shared/model/task';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent implements OnInit{

  fgTask: FormGroup = new FormGroup({});
  newTask: Task | null = null;

  protected readonly Validators = Validators;

  readonly dialogRef = inject(MatDialogRef<TaskDialogComponent>);

  ngOnInit() {
    this.initFgTask();
  }

  initFgTask(): void {
    this.fgTask = new FormGroup({
      id: new FormControl({value: null, disabled: false}),
      title: new FormControl({value: null, disabled: false}, Validators.required),
      description: new FormControl({value: null, disabled: false}),
      status: new FormControl({value: false, disabled: false}),
    })
  }

  toCreateNewTask(): void{
    const title = this.fgTask.get('title')?.value;
    const desc = this.fgTask.get('description')?.value;

    this.newTask = new Task(title, desc);
  }

  onClickCreate(): void {
    this.toCreateNewTask();

    this.dialogRef.close(this.newTask);
  }
}
