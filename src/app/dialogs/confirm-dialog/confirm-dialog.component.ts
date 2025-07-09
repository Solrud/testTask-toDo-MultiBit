import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {Task} from '../../shared/model/task';
import {DialogResult} from '../dialog-result';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle
    ],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent{
  title: string = '';
  description: string = '';

  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);

  onClickCancel(): void {
    this.dialogRef.close(DialogResult.CANCEL);
  }

  onClickConfirm(): void {
    this.dialogRef.close(DialogResult.CONFIRM);
  }
}
