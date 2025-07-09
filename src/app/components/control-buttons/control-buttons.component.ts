import {Component, input, output} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-control-buttons',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatFabButton, MatButton],
  templateUrl: './control-buttons.component.html',
  styleUrl: './control-buttons.component.css'
})
export class ControlButtonsComponent {
  readonly isSelectedElem = input<boolean>(false);

  readonly add = output<void>();
  readonly view = output<void>();
  readonly delete = output<void>();

  onClickAdd(): void {
    this.add.emit();
  }

  onClickView(): void {
    this.view.emit();
  }

  onClickDelete(): void {
    this.delete.emit();
  }
}
