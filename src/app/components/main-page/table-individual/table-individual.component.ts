import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TrainingsService} from "../../../services/trainings.service";
import {IndividualTraining} from "../../../models/individual-training.model";

@Component({
  selector: 'app-table-individual',
  templateUrl: './table-individual.component.html',
  styleUrls: ['./table-individual.component.scss']
})
export class TableIndividualComponent implements OnInit {
  public individualTrainings: Array<IndividualTraining> = [];

  constructor(public router: Router, public trainingService: TrainingsService,) {
  }

  public deleteIndividualTraining(id: number): void {
    this.trainingService.deleteIndividualTraining(id);
  }

  public editTraining(id: number): void {
    this.router.navigate(['planning', 'individual',  'edit', id]);
  }

  public viewTraining(id: number): void {
    this.router.navigate(['planning', 'individual', 'view', id]);
  }

  ngOnInit(): void {
    this.individualTrainings = this.trainingService.getIndividualTrainings();
  }

}
