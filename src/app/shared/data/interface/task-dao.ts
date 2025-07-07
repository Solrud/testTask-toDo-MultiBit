import {Observable} from 'rxjs';
import {Task} from '../../model/task';

export interface TaskDAO {
  get(id: number): Observable<Task | undefined>;

  delete(id: number): Observable<boolean>;

  add(task: Task): Observable<boolean>;

  update(task: Task): Observable<boolean>;

  findAll(): Observable<Task[]>;
}
