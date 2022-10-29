import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../Country';
import { PositionsService } from "../../services/positions.service";

@Component({
  selector: 'app-listcount',
  templateUrl: './listcount.component.html',
  styleUrls: ['./listcount.component.css']
})
export class ListcountComponent implements OnInit {
  countries: Country[] = [];
  @Input() group: string = "";

  position1: string = '1';
  position2: string = '2';

  constructor(
    private countryService: CountryService, private appService: PositionsService
  ) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      for (let country of countries) {
        if (country.group === this.group) {
          this.countries.push(country)
        }
      }
    });

  }


  updatePos1(position1) {
    
    this.appService.resetPositions(this.position1);
    this.position1 = position1;

    switch (this.group) {
      case 'A': {

        this.appService.updatePosition1a(this.position1);
        break;
      }
      case 'B': {
        
        this.appService.updatePosition1b(this.position1);
        break;
      }
      case 'C': {

        this.appService.updatePosition1c(this.position1);
        break;
      }
      case 'D': {

        this.appService.updatePosition1d(this.position1);
        break;
      }
      case 'E': {
 
        this.appService.updatePosition1e(this.position1);
        break;
      }
      case 'F': {

        this.appService.updatePosition1f(this.position1);
        break;
      }
      case 'G': {
  
        this.appService.updatePosition1g(this.position1);
        break;
      }
      case 'H': {

        this.appService.updatePosition1h(this.position1);
        break;
      }
    }
  }

  updatePos2(position2) {

    this.appService.resetPositions(this.position2);
    this.position2 = position2;

    switch (this.group) {
      case 'A': {

        this.appService.updatePosition2a(this.position2);
        break;
      }
      case 'B': {

        this.appService.updatePosition2b(this.position2);
        break;
      }
      case 'C': {

        this.appService.updatePosition2c(this.position2);
        break;
      }
      case 'D': {

        this.appService.updatePosition2d(this.position2);
        break;
      }
      case 'E': {

        this.appService.updatePosition2e(this.position2);
        break;
      }
      case 'F': {

        this.appService.updatePosition2f(this.position2);
        break;
      }
      case 'G': {

        this.appService.updatePosition2g(this.position2);
        break;
      }
      case 'H': {

        this.appService.updatePosition2h(this.position2);
        break;
      }

    }
  }
}
