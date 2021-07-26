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
  @Input() participants: any;

  public value = '';
  public filteredParticipants: Array<Participant> = [];

  drop(event: CdkDragDrop<Participant[]>) {
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
    this.filteredParticipants = this.trainingService.getParticipants();

  }

}
