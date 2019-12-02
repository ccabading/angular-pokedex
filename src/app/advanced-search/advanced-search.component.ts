import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '../animations';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
  animations: [SlideInOutAnimation],
})
export class AdvancedSearchComponent implements OnInit {
  animationState = 'out';

  constructor() { }

  ngOnInit() {
  }

  toggleShowDiv() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

}
