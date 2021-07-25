import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, public trainingService: TrainingsService, ) {
    this.activatedRoute.params.subscribe(params => {
      const type = params['type'];
      console.log(type);
      if (type !== 'new') {
        const id = params['id'];
         this.training = this.trainingService.getGroupTrainingById(+id);
      }
    });
  }

  ngOnInit(): void {
  }

}
