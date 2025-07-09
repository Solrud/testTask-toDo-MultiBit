import {Component, inject, OnInit, signal} from '@angular/core';
import {ControlButtonsComponent} from '../../components/control-buttons/control-buttons.component';
import {TableComponent} from '../../components/table/table.component';
import {TaskService} from '../../shared/data/dao/task.service';
import {Task} from '../../shared/model/task';
import {TestData} from '../../shared/data/TestData';
import {MatDialogModule} from '@angular/material/dialog';
import {OpenDialogService} from '../../shared/open-dialog/open-dialog.service';
import {DialogResult} from '../../dialogs/dialog-result';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ControlButtonsComponent,
    TableComponent,
    MatDialogModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  readonly dataTaskList = signal<Task[]>([]);
  readonly taskFieldList = signal(TestData.taskFieldList);
  readonly selectedTask = signal<Task | null>(null);

  readonly task = inject(TaskService);
  readonly openDialog = inject(OpenDialogService);
  readonly router = inject(Router);

  ngOnInit() {
    this.findAllTasks();
  }

  onAddTask(): void {
    this.openDialog.openDialogAddTask()
      .afterClosed()
      .subscribe( newTask => {
        this.task.add(newTask)
          .subscribe( result => {
            if (result) this.findAllTasks();
        });
    });
  }

  findAllTasks(): void {
    this.task.findAll()
      .subscribe(result => {

        this.dataTaskList.set([...result]);
      })
  }

  onViewTask(): void {
    const task = this.selectedTask();

    if (task){
      this.router.navigate(['/task', task.id])
    }
  }

  onDeleteTask(): void {
    const task = this.selectedTask();

    if (task && typeof task.id === 'number') {
      const id = task.id;
      const title = 'Удалить задачу?';
      const description = 'Вы уверены что хотите удалить задачу с айди -> ' + id;

      this.openDialog.openConfirmDialog(title, description)
        .afterClosed()
        .subscribe( resultDialog => {
          if (resultDialog === DialogResult.CONFIRM){
            this.task.delete(id)
              .subscribe( result => {
                if(result) this.findAllTasks();
              })
          }
      });
    }
  }


  onClickSelectTask(task: Task): void {
    this.selectedTask.set(task);
  }

  onChangeStatus(taskObj: {obj: Task, checked: boolean}): void {

    const oldTask = taskObj.obj;
    const newStatus = taskObj.checked;
    if (oldTask){
      const newTask = new Task(oldTask.title);
      newTask.id = oldTask.id;
      newTask.description = oldTask.description;
      newTask.status = newStatus;

      this.task.update(newTask)
        .subscribe( result => {
          if(result) this.findAllTasks();
      })
    }
  }
}
