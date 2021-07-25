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

  constructor(private activatedRoute: ActivatedRoute, public trainingService: TrainingsService,) {
    this.activatedRoute.params.subscribe(params => {
      const type = params['type'];
      if (type !== 'view') {
        this.isAvailable = true;
      } else {
        this.isAvailable = false;
      }
      if (type !== 'new') {
        const id = params['id'];
        this.training = this.trainingService.getGroupTrainingById(+id);
        // this.participantsNames = this.trainingService.getParticipantsById(+id);
        this.training = this.trainingService.getIndividualTrainingById(+id);
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
              trainer: {
                value: null,
                option: null,
              }
            },
            {
              name: null,
              date: null,
              trainer: {
                value: null,
                option: null,
              }
            },
            {
              name: null,
              date: null,
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
