import {inject, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TaskDialogComponent} from '../../dialogs/task-dialog/task-dialog.component';
import {ConfirmDialogComponent} from '../../dialogs/confirm-dialog/confirm-dialog.component';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {
  readonly dialog = inject(MatDialog);

  openDialogAddTask() {
    return this.dialog.open(TaskDialogComponent, {width: '500px'});
  }

  openConfirmDialog(title: string, description: string) {
    const openConfirmDialog = this.dialog.open(ConfirmDialogComponent);
    openConfirmDialog.componentInstance.title = title;
    openConfirmDialog.componentInstance.description = description;

    return openConfirmDialog;
  }
}
