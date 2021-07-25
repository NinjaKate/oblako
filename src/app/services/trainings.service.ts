import { Injectable } from '@angular/core';
import {GroupTraining} from "../models/group-training.model";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private groupTrainings: Array<GroupTraining> = [
    {
      program: {
        value: 'Страхование с заботой о клиенте',
        option: 'option1',
      },
      conditionCode: 'option1',
      participants: [],
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        }
      ],
      progress: 90,
      id: 0,
    },
    {
      program: {
        value: 'Главные правила продаж',
        option: 'option2',
      },
      conditionCode: 'option1',
      participants: [],
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        }
      ],
      progress: 90,
      id: 1,
    },
    {
      program: {
        value: 'Первичное обучение КС',
        option: 'option3',
      },
      conditionCode: 'option1',
      participants: [],
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        }
      ],
      progress: 90,
      id: 2,
    },
    {
      program: {
        value: 'Вторичное обучение КС',
        option: 'option4',
      },
      conditionCode: 'option1',
      participants: [],
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        }
      ],
      progress: 90,
      id: 3,
    },
  ];

  private individualTrainings = [];

  constructor() { }

  public getGroupTrainings(): Array<GroupTraining> {
    return this.groupTrainings;
  }

  public deleteGroupTraining(id: number): void {
    for (let i = 0; i < this.groupTrainings.length; i++) {
      if (id === this.groupTrainings[i].id) {
        this.groupTrainings.splice(i, 1);
      }
    }
  }

  public getGroupTrainingById(id: number): any {
    for (let i = 0; i < this.groupTrainings.length; i++) {
      if (id === this.groupTrainings[i].id) {
        return this.groupTrainings[i];
      }
    }
  }

  public newIdForGroupTraining(): number {
    let id = 0;
    for (let i = 0; i < this.groupTrainings.length; i++) {
      if (this.groupTrainings[i].id > id) {
        id = this.groupTrainings[i].id;
      }
    }
    return id + 1;
  }

}
