import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private groupTrainings = [
    {
      startDate: '23дек, 9:00',
      name: 'Страхование с заботой и клиенте',
      participants: 12,
      trainer: '',
      progress: '90%',
      id: 0,
    },
    {
      startDate: '14ноя, 9:30',
      name: 'Главные правила продаж',
      participants: 10,
      trainer: '',
      progress: '92%',
      id: 1,
    },
    {
      startDate: '19окт, 14:30',
      name: 'Первичное обучение КС',
      participants: 8,
      trainer: '',
      progress: '86%',
      id: 2,
    },
    {
      startDate: '10окт, 16:00',
      name: 'Вторичное обучение КС',
      participants: 18,
      trainer: '',
      progress: '82%',
      id: 3,
    },
  ];

  private individualTrainings = [];

  constructor() { }

  public getGroupTrainings(): Array<any> {
    return this.groupTrainings;
  }

  public deleteGroupTraining(id: number): void {
    for (let i = 0; i < this.groupTrainings.length; i++) {
      if (id === this.groupTrainings[i].id) {
        this.groupTrainings.splice(i, 1);
      }
    }
  }
}
