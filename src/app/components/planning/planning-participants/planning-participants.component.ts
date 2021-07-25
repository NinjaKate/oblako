import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-planning-participants',
  templateUrl: './planning-participants.component.html',
  styleUrls: ['./planning-participants.component.scss']
})
export class PlanningParticipantsComponent implements OnInit {

  value = '';

  out = [
    'Ольга Крышкова',
    'Юлия Грунина',
    'Марат Большаков',
    'Светлана Иванова',
    'Данил Горбунов',
    'Дарья Васильева',
    'Владимир Силеванов',
    'Матвей Самсонов',
  ];

  inside = [
    'Максим Вильниц',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
