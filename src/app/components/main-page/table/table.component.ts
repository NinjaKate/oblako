import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TrainingsService} from "../../../services/trainings.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public trainings: Array<any> = [];

  constructor(public router: Router, public trainingService: TrainingsService) {
  }

  public deleteTraining(id: number): void {
    this.trainingService.deleteGroupTraining(id);
  }

  public editTraining(id: number): void {
    this.router.navigate(['planning', id, 'edit']);
  }

  public viewTraining(id: number): void {
    this.router.navigate(['planning', id, 'view']);
  }

  ngOnInit(): void {
    this.trainings = this.trainingService.getGroupTrainings();
  }

}
