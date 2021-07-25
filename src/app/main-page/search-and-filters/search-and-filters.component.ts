import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-filters',
  templateUrl: './search-and-filters.component.html',
  styleUrls: ['./search-and-filters.component.scss']
})
export class SearchAndFiltersComponent implements OnInit {

  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
