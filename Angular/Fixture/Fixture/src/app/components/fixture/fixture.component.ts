import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositionsService } from "../../services/positions.service";


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  pos1a: string = '';
  pos2b: string = '';
  pos1c: string = '';
  pos2d: string = '';
  pos1e: string = '';
  pos2f: string = '';
  pos1g: string = '';
  pos2h: string = '';
  pos1b: string = '';
  pos2a: string = '';
  pos1d: string = '';
  pos2c: string = '';
  pos1f: string = '';
  pos2e: string = '';
  pos1h: string = '';
  pos2g: string = '';

  posg8a: string = '';
  posg8b: string = '';
  posg8c: string = '';
  posg8d: string = '';
  posg8e: string = '';
  posg8f: string = '';
  posg8g: string = '';
  posg8h: string = '';

  posg4a: string = '';
  posg4b: string = '';
  posg4c: string = '';
  posg4d: string = '';

  posg2a: string = '';
  posg2b: string = '';

  posg1a: string = '';

  constructor(private appService: PositionsService) { }


  ngOnInit(): void {
    this.appService.currentPosition1a.subscribe(pos1 => this.pos1a = pos1);
    this.appService.currentPosition2a.subscribe(pos2 => this.pos2a = pos2);
    this.appService.currentPosition1b.subscribe(pos1 => this.pos1b = pos1);
    this.appService.currentPosition2b.subscribe(pos2 => this.pos2b = pos2);
    this.appService.currentPosition1c.subscribe(pos1 => this.pos1c = pos1);
    this.appService.currentPosition2c.subscribe(pos2 => this.pos2c = pos2);
    this.appService.currentPosition1d.subscribe(pos1 => this.pos1d = pos1);
    this.appService.currentPosition2d.subscribe(pos2 => this.pos2d = pos2);
    this.appService.currentPosition1e.subscribe(pos1 => this.pos1e = pos1);
    this.appService.currentPosition2e.subscribe(pos2 => this.pos2e = pos2);
    this.appService.currentPosition1f.subscribe(pos1 => this.pos1f = pos1);
    this.appService.currentPosition2f.subscribe(pos2 => this.pos2f = pos2);
    this.appService.currentPosition1g.subscribe(pos1 => this.pos1g = pos1);
    this.appService.currentPosition2g.subscribe(pos2 => this.pos2g = pos2);
    this.appService.currentPosition1h.subscribe(pos1 => this.pos1h = pos1);
    this.appService.currentPosition2h.subscribe(pos2 => this.pos2h = pos2);
  }

  selectPos(event: Event) {
 
    switch ((event.target as HTMLInputElement).id) {
      case 'mob_1a':
        this.posg8a = this.pos1a;
        break;
      case 'mob_1b':
        this.posg8e = this.pos1b;
        break;
      case 'mob_1c':
        this.posg8b = this.pos1c;
        break;
      case 'mob_1d':
        this.posg8f = this.pos1d;
        break;
      case 'mob_1e':
        this.posg8c = this.pos1e;
        break;
      case 'mob_1f':
        this.posg8g = this.pos1f;
        break;
      case 'mob_1g':
        this.posg8d = this.pos1g;
        break;
      case 'mob_1h':
        this.posg8h = this.pos1h;
        break;

      case 'mob_2a':
        this.posg8e = this.pos2a;
        break;
      case 'mob_2b':
        this.posg8a = this.pos2b;
        break;
      case 'mob_2c':
        this.posg8f = this.pos2c;
        break;
      case 'mob_2d':
        this.posg8b = this.pos2d;
        break;
      case 'mob_2e':
        this.posg8g = this.pos2e;
        break;
      case 'mob_2f':
        this.posg8c = this.pos2f;
        break;
      case 'mob_2g':
        this.posg8h = this.pos2g;
        break;
      case 'mob_2h':
        this.posg8d = this.pos2h;
        break;

      case 'mobCuartos1':
        this.posg4a = this.posg8a;
        break;
      case 'mobCuartos2':
        this.posg4a = this.posg8b;
        break;
      case 'mobCuartos3':
        this.posg4b = this.posg8c;
        break;
      case 'mobCuartos4':
        this.posg4b = this.posg8d;
        break;
      case 'mobCuartos5':
        this.posg4c = this.posg8e;
        break;
      case 'mobCuartos6':
        this.posg4c = this.posg8f;
        break;
      case 'mobCuartos7':
        this.posg4d = this.posg8g;
        break;
      case 'mobCuartos8':
        this.posg4d = this.posg8h;
        break;

      case 'mobSemis1':
        this.posg2a = this.posg4a;
        break;
      case 'mobSemis2':
        this.posg2a = this.posg4b;
        break;
      case 'mobSemis3':
        this.posg2b = this.posg4c;
        break;
      case 'mobSemis4':
        this.posg2b = this.posg4d;
        break;

      case 'mobFinal1':
        this.posg1a = this.posg4a;
        break;
      case 'mobFinal2':
        this.posg1a = this.posg4b;
        break;

      default:
        break;

             
    }
  }

}
