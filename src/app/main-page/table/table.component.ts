import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Array<any>;

  constructor() {
    this.data = [
      {
        startDate: '23дек, 9:00',
        name: 'Страхование с заботой и клиенте',
        participants: 12,
        trainer: '',
        progress: '90%'
      },
      {
        startDate: '14ноя, 9:30',
        name: 'Главные правила продаж',
        participants: 10,
        trainer: '',
        progress: '92%'
      },
      {
        startDate: '19окт, 14:30',
        name: 'Первичное обучение КС',
        participants: 8,
        trainer: '',
        progress: '86%'
      },
      {
        startDate: '10окт, 16:00',
        name: 'Вторичное обучение КС',
        participants: 18,
        trainer: '',
        progress: '82%'
      },
    ]
  }

  ngOnInit(): void {
  }


}
// calculateCells(){
//    let table = document.getElementById("groupTable");
//    let max = 0;
//    for(let i=0; i<table.rows.length; i++) {
//      if(max < table.rows[i].cells.length)
//        max = table.rows[i].cells.length;
//    }
//    return max;
//  }

// addId() {
//   let tables = document.getElementsByTagName("table");
//   for (let i = 0; i < tables.length; i++) {
//     let table = tables[i];
//     table.id = String(i + 1);
//   }
// }
// calculateRows() {
//   let oRows = document.getElementById('groupTable').getElementsByTagName('tr');
//   let iRowCount = oRows.length;
//   alert('Your table has ' + iRowCount + ' rows.');
// }
