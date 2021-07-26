import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TrainingsService} from "../../services/trainings.service";
import {GroupTraining} from "../../models/group-training.model";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  public training: any;
  public isAvailable: boolean = true;
  public participantsNames: any;
  public isGroup: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, public trainingService: TrainingsService,) {
    this.activatedRoute.params.subscribe(params => {
      const type = params['type'];
      this.isAvailable = type !== 'view';
      const groupType = params['groupType'];
      this.isGroup = groupType === 'group';
      if (type !== 'new') {
        const id = params['id'];
        if (this.isGroup) {
          this.training = this.trainingService.getGroupTrainingById(+id);
        } else {
          this.training = this.trainingService.getIndividualTrainingById(+id);
        }
        // this.participantsNames = this.trainingService.getParticipantsById(+id);
      } else {
        this.training = {
          program: {
            value: null,
            option: null,
          },
          conditionCode: null,
          participants: [],
          events: [
            {
              name: null,
              date: null,
              timeHours: null,
              timeMinutes: null,
              trainer: {
                value: null,
                option: null,
              }
            },
            {
              name: null,
              date: null,
              timeHours: null,
              timeMinutes: null,
              trainer: {
                value: null,
                option: null,
              }
            },
            {
              name: null,
              date: null,
              timeHours: null,
              timeMinutes: null,
              trainer: {
                value: null,
                option: null,
              }
            },
          ],
          progress: 0,
          id: this.trainingService.newIdForGroupTraining(),
        }
        // this.participantsNames = null;
      }
    });
  }

  ngOnInit(): void {
  }

}
