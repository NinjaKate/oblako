import {Component, Input, OnInit} from '@angular/core';
import {GroupTraining} from "../../../models/group-training.model";
import {TrainingsService} from "../../../services/trainings.service";


@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.scss']
})
export class SearchAndFiltersComponent implements OnInit {

  @Input() isGroup: boolean = true;

  public trainings: Array<GroupTraining> = [];
  value = '';
  constructor(public trainingService: TrainingsService) { }

  ngOnInit(): void {
    if (this.isGroup) {
    this.trainings = this.trainingService.getGroupTrainings();
    } else {
     this.trainings = this.trainingService.getIndividualTrainings();
    }
  }

}
