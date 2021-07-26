import {Injectable} from '@angular/core';
import {GroupTraining} from "../models/group-training.model";
import {Participant} from "../models/participant.model";
import {IndividualTraining} from "../models/individual-training.model";

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
      conditionCode: 'no-code',
      participants: [
        {
          group: {
            value: 'Обучение',
            option: 'option3',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: 'Более 10 лет',
            option: 'option3',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Сибирский',
            option: 'option3',
          },
          city: {
            value: 'Иркутск',
            option: 'option3',
          },
          name: 'Юлия Грунина',
          id: 2,
        },
        {
          group: {
            value: 'Управление',
            option: 'option2',
          },
          status: {
            value: 'Системный администратор',
            option: 'option3',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Светлана Иванова',
          id: 4,
        },
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Максим Вильниц',
          id: 0,
        },
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по продажам',
            option: 'option2',
          },
          experience: {
            value: '1-3 года',
            option: 'option1',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Северо-Западный',
            option: 'option2',
          },
          city: {
            value: 'Санкт-Петербург',
            option: 'option2',
          },
          name: 'Ольга Крышкова',
          id: 1,
        },
      ],
      events: [
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        },
      ],
      progress: 90,
      id: 0,
    },
    {
      program: {
        value: 'Главные правила продаж',
        option: 'option2',
      },
      conditionCode: 'registration',
      participants: [
        {
          group: {
            value: 'Обучение',
            option: 'option3',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: 'Более 10 лет',
            option: 'option3',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Сибирский',
            option: 'option3',
          },
          city: {
            value: 'Иркутск',
            option: 'option3',
          },
          name: 'Юлия Грунина',
          id: 2,
        },
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по продажам',
            option: 'option2',
          },
          experience: {
            value: '1-3 года',
            option: 'option1',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Северо-Западный',
            option: 'option2',
          },
          city: {
            value: 'Санкт-Петербург',
            option: 'option2',
          },
          name: 'Ольга Крышкова',
          id: 1,
        },
      ],
      events: [
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        },
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        }
      ],
      progress: 92,
      id: 1,
    },
    {
      program: {
        value: 'Первичное обучение КС',
        option: 'option3',
      },
      conditionCode: 'name',
      participants: [
        {
          group: {
            value: 'Обучение',
            option: 'option3',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: 'Более 10 лет',
            option: 'option3',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Сибирский',
            option: 'option3',
          },
          city: {
            value: 'Иркутск',
            option: 'option3',
          },
          name: 'Юлия Грунина',
          id: 2,
        },
        {
          group: {
            value: 'Управление',
            option: 'option2',
          },
          status: {
            value: 'Системный администратор',
            option: 'option3',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Светлана Иванова',
          id: 4,
        },
      ],
      events: [
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        },
      ],
      progress: 82,
      id: 2,
    },
    {
      program: {
        value: 'Вторичное обучение КС',
        option: 'option4',
      },
      conditionCode: 'nothing',
      participants: [
        {
          group: {
            value: 'Управление',
            option: 'option2',
          },
          status: {
            value: 'Системный администратор',
            option: 'option3',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Светлана Иванова',
          id: 4,
        },
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по продажам',
            option: 'option2',
          },
          experience: {
            value: '1-3 года',
            option: 'option1',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Северо-Западный',
            option: 'option2',
          },
          city: {
            value: 'Санкт-Петербург',
            option: 'option2',
          },
          name: 'Ольга Крышкова',
          id: 1,
        },
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Максим Вильниц',
          id: 0,
        },
      ],
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        }
      ],
      progress: 86,
      id: 3,
    },
  ];

  private individualTrainings: Array<IndividualTraining> = [
    {
      program: {
        value: 'Страхование с заботой о клиенте',
        option: 'option1',
      },
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        }

      ],
      conditionCode: 'no-code',
      participants: [
        {
          group: {
            value: 'Управление',
            option: 'option2',
          },
          status: {
            value: 'Системный администратор',
            option: 'option3',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Белгород',
            option: 'option4',
          },
          name: 'Светлана Иванова',
          id: 4,
        },
      ],
      progress: 80,
      id: 10,
    },
    {
      program: {
        value: 'Главные правила продаж',
        option: 'option2',
      },
      events: [
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        },
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
      ],
      conditionCode: 'name',
      participants: [{
        group: {
          value: 'Администрирование',
          option: 'option1',
        },
        status: {
          value: 'Менеджер по продажам',
          option: 'option2',
        },
        experience: {
          value: '1-3 года',
          option: 'option1',
        },
        subdivision: {
          value: 'Администрация',
          option: 'option1',
        },
        area: {
          value: 'Северо-Западный',
          option: 'option2',
        },
        city: {
          value: 'Санкт-Петербург',
          option: 'option2',
        },
        name: 'Ольга Крышкова',
        id: 1,
      },
      ],
      progress: 92,
      id: 11,
    },
    {
      program: {
        value: 'Первичное обучение КС',
        option: 'option3',
      },
      events: [
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        },
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
      ],
      conditionCode: 'registration',
      participants: [
        {
          group: {
            value: 'Обучение',
            option: 'option3',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: 'Более 10 лет',
            option: 'option3',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Сибирский',
            option: 'option3',
          },
          city: {
            value: 'Иркутск',
            option: 'option3',
          },
          name: 'Юлия Грунина',
          id: 2,
        },
      ],
      progress: 84,
      id: 12,
    },
    {
      program: {
        value: 'Страхование с заботой о клиенте',
        option: 'option1',
      },
      events: [
        {
          name: 'Главные правила продаж',
          date: new Date(),
          trainer: {
            value: 'Сергей Ефремов',
            option: 'option1',
          }
        },
        {
          name: 'Страховой случай или как помочь клиенту',
          date: new Date(),
          trainer: {
            value: 'Тим Кук',
            option: 'option3',
          }
        },
        {
          name: 'Страхование без проблем',
          date: new Date(),
          trainer: {
            value: 'Илон Маск',
            option: 'option2',
          }
        }

      ],
      conditionCode: 'no-code',
      participants: [
        {
          group: {
            value: 'Администрирование',
            option: 'option1',
          },
          status: {
            value: 'Менеджер по персоналу',
            option: 'option1',
          },
          experience: {
            value: '3-10 лет',
            option: 'option2',
          },
          subdivision: {
            value: 'Администрация',
            option: 'option1',
          },
          area: {
            value: 'Центральный',
            option: 'option1',
          },
          city: {
            value: 'Москва',
            option: 'option1',
          },
          name: 'Марат Большаков',
          id: 3,
        },
      ],
      progress: 75,
      id: 13,
    },
  ];

  private participants: Array<Participant> = [
    {
      group: {
        value: 'Администрирование',
        option: 'option1',
      },
      status: {
        value: 'Менеджер по персоналу',
        option: 'option1',
      },
      experience: {
        value: '3-10 лет',
        option: 'option2',
      },
      subdivision: {
        value: 'Администрация',
        option: 'option1',
      },
      area: {
        value: 'Центральный',
        option: 'option1',
      },
      city: {
        value: 'Белгород',
        option: 'option4',
      },
      name: 'Максим Вильниц',
      id: 0,
    },
    {
      group: {
        value: 'Администрирование',
        option: 'option1',
      },
      status: {
        value: 'Менеджер по продажам',
        option: 'option2',
      },
      experience: {
        value: '1-3 года',
        option: 'option1',
      },
      subdivision: {
        value: 'Администрация',
        option: 'option1',
      },
      area: {
        value: 'Северо-Западный',
        option: 'option2',
      },
      city: {
        value: 'Санкт-Петербург',
        option: 'option2',
      },
      name: 'Ольга Крышкова',
      id: 1,
    },
    {
      group: {
        value: 'Обучение',
        option: 'option3',
      },
      status: {
        value: 'Менеджер по персоналу',
        option: 'option1',
      },
      experience: {
        value: 'Более 10 лет',
        option: 'option3',
      },
      subdivision: {
        value: 'Администрация',
        option: 'option1',
      },
      area: {
        value: 'Сибирский',
        option: 'option3',
      },
      city: {
        value: 'Иркутск',
        option: 'option3',
      },
      name: 'Юлия Грунина',
      id: 2,
    },
    {
      group: {
        value: 'Администрирование',
        option: 'option1',
      },
      status: {
        value: 'Менеджер по персоналу',
        option: 'option1',
      },
      experience: {
        value: '3-10 лет',
        option: 'option2',
      },
      subdivision: {
        value: 'Администрация',
        option: 'option1',
      },
      area: {
        value: 'Центральный',
        option: 'option1',
      },
      city: {
        value: 'Москва',
        option: 'option1',
      },
      name: 'Марат Большаков',
      id: 3,
    },
    {
      group: {
        value: 'Управление',
        option: 'option2',
      },
      status: {
        value: 'Системный администратор',
        option: 'option3',
      },
      experience: {
        value: '3-10 лет',
        option: 'option2',
      },
      subdivision: {
        value: 'Администрация',
        option: 'option1',
      },
      area: {
        value: 'Центральный',
        option: 'option1',
      },
      city: {
        value: 'Белгород',
        option: 'option4',
      },
      name: 'Светлана Иванова',
      id: 4,
    },
  ];

  constructor() {
  }

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

  public getIndividualTrainings() {
    return this.individualTrainings;
  }

  public deleteIndividualTraining(id: number): void {
    for (let i = 0; i < this.individualTrainings.length; i++) {
      if (id === this.individualTrainings[i].id) {
        this.individualTrainings.splice(i, 1);
      }
    }
  }

  public getIndividualTrainingById(id: number): any {
    for (let i = 0; i < this.individualTrainings.length; i++) {
      if (id === this.individualTrainings[i].id) {
        return this.individualTrainings[i];
      }
    }
  }

  public newIdForIndividualTraining(): number {
    let id = 0;
    for (let i = 0; i < this.individualTrainings.length; i++) {
      if (this.individualTrainings[i].id > id) {
        id = this.individualTrainings[i].id;
      }
    }
    return id + 1;
  }

  public getParticipants(): any {
    return this.participants;
  }

  public getParticipantsById(id: number): any {
    for (let i = 0; i < this.groupTrainings.length; i++) {
      if (id === this.groupTrainings[i].id) {
        return this.groupTrainings[i].participants.map(a => a.name);
      }
    }
  }


}
