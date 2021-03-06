import {Component, Input, OnInit} from '@angular/core';
import {GroupTraining} from "../../../models/group-training.model";

@Component({
  selector: 'app-planning-main',
  templateUrl: './planning-main.component.html',
  styleUrls: ['./planning-main.component.scss']
})
export class PlanningMainComponent implements OnInit {

  @Input() training: any;
  @Input() isAvailable: any;

  constructor() { }

  ngOnInit(): void {

  }

}
