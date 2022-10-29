import { Component, OnInit } from '@angular/core';
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


    this.appService.currentPositiong8a.subscribe(pos2 => this.posg8a = pos2);
    this.appService.currentPositiong8b.subscribe(pos2 => this.posg8b = pos2);
    this.appService.currentPositiong8c.subscribe(pos2 => this.posg8c = pos2);
    this.appService.currentPositiong8d.subscribe(pos2 => this.posg8d = pos2);
    this.appService.currentPositiong8e.subscribe(pos2 => this.posg8e = pos2);
    this.appService.currentPositiong8f.subscribe(pos2 => this.posg8f = pos2);
    this.appService.currentPositiong8g.subscribe(pos2 => this.posg8g = pos2);
    this.appService.currentPositiong8h.subscribe(pos2 => this.posg8h = pos2);

    this.appService.currentPositiong4a.subscribe(pos2 => this.posg4a= pos2);
    this.appService.currentPositiong4b.subscribe(pos2 => this.posg4b = pos2);
    this.appService.currentPositiong4c.subscribe(pos2 => this.posg4c = pos2);
    this.appService.currentPositiong4d.subscribe(pos2 => this.posg4d = pos2);

    this.appService.currentPositiong2a.subscribe(pos2 => this.posg2a = pos2);
    this.appService.currentPositiong2b.subscribe(pos2 => this.posg2b = pos2);

    this.appService.currentPositiong1a.subscribe(pos2 => this.posg1a = pos2);

  }
  
  selectPos(event: Event) {
 
    switch ((event.target as HTMLInputElement).id) {
      case 'mob_1a':
        this.appService.updatePositiong8a(this.pos1a);
        break;
      case 'mob_1b':
        this.appService.updatePositiong8b(this.pos1b);
        break;
      case 'mob_1c':
        this.appService.updatePositiong8c(this.pos1c);
        break;
      case 'mob_1d':
        this.appService.updatePositiong8d(this.pos1d);

        break;
      case 'mob_1e':
        this.appService.updatePositiong8e(this.pos1e);

        break;
      case 'mob_1f':
        this.appService.updatePositiong8f(this.pos1f);

        break;
      case 'mob_1g':
        this.appService.updatePositiong8g(this.pos1g);

        break;
      case 'mob_1h':
        this.appService.updatePositiong8h(this.pos1h);

        break;


      case 'mob_2a':
        this.appService.updatePositiong8a(this.pos2a);

        break;
      case 'mob_2b':
        this.appService.updatePositiong8b(this.pos2b);

        break;
      case 'mob_2c':
        this.appService.updatePositiong8c(this.pos2c);

        break;
      case 'mob_2d':
        this.appService.updatePositiong8d(this.pos2d);

        break;
      case 'mob_2e':
        this.appService.updatePositiong8e(this.pos2e);

        break;
      case 'mob_2f':
        this.appService.updatePositiong8f(this.pos2f);

        break;
      case 'mob_2g':
        this.appService.updatePositiong8g(this.pos2g);

        break;
      case 'mob_2h':
        this.appService.updatePositiong8h(this.pos2h);

        break;

      case 'mobCuartos1':
        this.appService.updatePositiong4a(this.posg8a);

        break;
      case 'mobCuartos2':
        this.appService.updatePositiong4a(this.posg8b);

        break;
      case 'mobCuartos3':
        this.appService.updatePositiong4b(this.posg8c);

        break;
      case 'mobCuartos4':
        this.appService.updatePositiong4b(this.posg8d);

        break;
      case 'mobCuartos5':
        this.appService.updatePositiong4c(this.posg8e);

        break;
      case 'mobCuartos6':
        this.appService.updatePositiong4c(this.posg8f);

        break;
      case 'mobCuartos7':
        this.appService.updatePositiong4d(this.posg8g);

        break;
      case 'mobCuartos8':
        this.appService.updatePositiong4d(this.posg8h);

        break;

      case 'mobSemis1':
        this.appService.updatePositiong2a(this.posg4a);

        break;
      case 'mobSemis2':
        this.appService.updatePositiong2a(this.posg4b);

        break;
      case 'mobSemis3':
        this.appService.updatePositiong2b(this.posg4c);

        break;
      case 'mobSemis4':
        this.appService.updatePositiong2b(this.posg4d);

        break;

      case 'mobFinal1':
        this.appService.updatePositiong1a(this.posg2a);

        break;
      case 'mobFinal2':
        this.appService.updatePositiong1a(this.posg2b);

        break;

      default:
        break;

             
    }
  }

}
