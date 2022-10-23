import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositionsService } from "../../services/positions.service";


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  pos1a: string = '1°a';
  pos2b: string = '2°b';
  pos1c: string = '1°c';
  pos2d: string = '2°d';
  pos1e: string = '1°e';
  pos2f: string = '2°f';
  pos1g: string = '1°g';
  pos2h: string = '2°h';
  pos1b: string = '1°b';
  pos2a: string = '2°a';
  pos1d: string = '1°d';
  pos2c: string = '2°c';
  pos1f: string = '1°f';
  pos2e: string = '2°e';
  pos1h: string = '1°h';
  pos2g: string = '2°g';

  constructor(private appService: PositionsService) { }

  public reservationForm: FormGroup = new FormGroup({
    Octavos: new FormControl('', [Validators.required], []),
    Cuartos: new FormControl('', [Validators.required], []),
    Semi: new FormControl('', [Validators.required], []),
    Final: new FormControl('', [Validators.required], []),
  });

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

  

}
