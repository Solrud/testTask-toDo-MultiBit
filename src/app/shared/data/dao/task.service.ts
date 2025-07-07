import {Injectable} from '@angular/core';
import {TaskDAO} from '../interface/task-dao';
import {Observable, of} from 'rxjs';
import {Task} from '../../model/task';
import {getLastIdTask} from '../../getLastIdTask/getLastIdTask';
import {TestData} from '../TestData';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements TaskDAO{

  get(id: number): Observable<Task | undefined> {
    return of(TestData.taskList.find(task => task.id === id));
  }

  delete(id: number): Observable<boolean>{
    const i = TestData.taskList.findIndex( i => i.id === id);

    TestData.taskList.splice(i, 1);

    return of(true);
  }

  add(task: Task): Observable<boolean>{
    task.id = getLastIdTask();
    TestData.taskList.push(task);

    return of(true);
  }

  update(task: Task): Observable<boolean>{
    const i = TestData.taskList.findIndex( i => i.id === task.id);
    TestData.taskList.splice(i, 1, task);

    return of(true);
  }

  findAll(): Observable<Task[]>{
    return of(TestData.taskList);
  }

}
