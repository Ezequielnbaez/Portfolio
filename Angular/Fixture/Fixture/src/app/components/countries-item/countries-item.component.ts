import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/Country';
import { COUNTRIES } from 'src/app/mock-countries';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-countries-item',
  templateUrl: './countries-item.component.html',
  styleUrls: ['./countries-item.component.css']
})
export class CountriesItemComponent implements OnInit {
  @Input() group = '';
  @Input() country: Country = COUNTRIES[0]

  @Output() pos1 = new EventEmitter<string>();
  @Output() pos2 = new EventEmitter<string>();

  groupPos1: string = '';
  groupPos2: string = '';

  selectedValue1: number = 0;
  selectedValue2: number = 0;


  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
    this.groupPos1 = this.group + 1
    this.groupPos2 = this.group + 2
  }


  radioButtonGroupChange1(event: MatRadioChange) {
    this.selectedValue1 = event.value;
    this.pos1.emit(this.country.name);
  }

  radioButtonGroupChange2(event: MatRadioChange) {
    this.selectedValue2 = event.value;
    this.pos2.emit(this.country.name);
  }


}
