import {Component, effect, input, output, signal} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Task} from '../../shared/model/task';
import {TestData} from '../../shared/data/TestData';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  readonly dataSourceList = input.required<any>();
  readonly columnFieldList = input.required<string[]>();

  readonly selectElem = output<any>();
  readonly statusChange = output<any>();

  readonly selectedRow = signal<any>(null);

  getStatusName(status: boolean): string {
    if (status) return 'Выполнено';
    return 'Не выполнено';
  }

  onChangeStatus(obj: any, checked: boolean) {
     this.statusChange.emit({obj, checked });
  }

  onClickRow(elem: any): void {
    this.selectedRow.set(elem);
    this.selectElem.emit(elem);
  }
}
