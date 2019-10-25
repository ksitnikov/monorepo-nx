import { Component, Input, OnInit } from '@angular/core';

interface ColumnDefine {
  header: string;
  name: string;
}

@Component({
  selector: 'monorepo-nx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() dataSource: any;
  @Input() colDef: ColumnDefine[];

  constructor() { }

  ngOnInit() {
  }

  get displayedColumns () {
    return this.colDef.map(col => col.name);
  }

}
