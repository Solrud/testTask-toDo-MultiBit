import {TestData} from '../data/TestData';

export function getLastIdTask(): number {
  const ids = TestData.taskList
    .map(task => task.id)
    .filter((id): id is number => id !== null);

  return Math.max.apply(Math, ids) + 1;
}

