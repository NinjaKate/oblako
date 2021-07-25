import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TrainingsService} from "../../../services/trainings.service";
import {Participant} from "../../../models/participant.model";

@Component({
  selector: 'app-planning-participants',
  templateUrl: './planning-participants.component.html',
  styleUrls: ['./planning-participants.component.scss']
})
export class PlanningParticipantsComponent implements OnInit {

  @Input() isAvailable: any;

  value = '';

  public out: Array<string> = [];

 public inside: Array<string> = [];

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

  constructor(public trainingService: TrainingsService,) { }

  ngOnInit(): void {
    this.out = this.trainingService.getParticipantsNames();
    this.inside = this.trainingService.getParticipantsOfEventNames(0);
  }

}
