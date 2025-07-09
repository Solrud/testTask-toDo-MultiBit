import {Task} from '../model/task';


export class TestData{
  static taskFieldList: string[]= ['id', 'title', 'description', 'status'];

  static taskList: Task[] = [
    {id: 0, title: 'Проверка таски без описания', description: '', status: false},
    {id: 1, title: 'Написать мини-приложение "Список задач" (ToDo)\n', description: 'Приложение на Angular v.18', status: true},
    {id: 2, title: 'Выложить изменения приложения на github', description: 'https://github.com/Solrud', status: true},
    {id: 3, title: 'Получить приглашение на вакансию!', description: '100%', status: false},
  ]
}
