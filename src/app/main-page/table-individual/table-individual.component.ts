import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-individual',
  templateUrl: './table-individual.component.html',
  styleUrls: ['./table-individual.component.scss']
})
export class TableIndividualComponent implements OnInit {
  data: Array<any>;

  constructor() {
    this.data = [
      {
        startDate: '23дек, 9:00',
        name: 'Страхование с заботой и клиенте',
        participant: 'Иванов А.А.',
        trainer: '',
        progress: '90%'
      },
      {
        startDate: '14ноя, 9:30',
        name: 'Главные правила продаж',
        participant: 'Петров А.А.',
        trainer: '',
        progress: '92%'
      },
      {
        startDate: '19окт, 14:30',
        name: 'Первичное обучение КС',
        participant: 'Васильков В.В.',
        trainer: '',
        progress: '86%'
      },
      {
        startDate: '10окт, 16:00',
        name: 'Вторичное обучение КС',
        participant: 'Анатольев А.А.',
        trainer: '',
        progress: '82%'
      },
    ]
  }

  ngOnInit(): void {
  }

}
