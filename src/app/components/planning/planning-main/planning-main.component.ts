import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-main',
  templateUrl: './planning-main.component.html',
  styleUrls: ['./planning-main.component.scss']
})
export class PlanningMainComponent implements OnInit {

  time1 = '';
  time2 = '';
  time3 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
