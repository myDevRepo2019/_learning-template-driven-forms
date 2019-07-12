import { Component, OnInit } from '@angular/core';

import { Hero} from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Super smart', 'Power 2', 'Power 3', 'Power 4'];

  formSubmitted = false;

  currentHeroModel = new Hero(18, 'Mr. IQ', this.powers[0], 'Sam Smith');

  SubmitForm() {
    this.formSubmitted = true;
  }

  newHero() {
    this.currentHeroModel = new Hero(42, '', '')
  }

  get diagnostics() { return JSON.stringify(this.currentHeroModel); }

  constructor() { }

  ngOnInit() {
  }

}
