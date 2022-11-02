import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PositionsService {


  private pos1a = new BehaviorSubject('');
  private pos2a = new BehaviorSubject('');

  private pos1b = new BehaviorSubject('');
  private pos2b = new BehaviorSubject('');

  private pos1c = new BehaviorSubject('');
  private pos2c = new BehaviorSubject('');

  private pos1d = new BehaviorSubject('');
  private pos2d = new BehaviorSubject('');

  private pos1e = new BehaviorSubject('');
  private pos2e = new BehaviorSubject('');

  private pos1f = new BehaviorSubject('');
  private pos2f = new BehaviorSubject('');

  private pos1g = new BehaviorSubject('');
  private pos2g = new BehaviorSubject('');

  private pos1h = new BehaviorSubject('');
  private pos2h = new BehaviorSubject('');



  private posg8a = new BehaviorSubject('');
  private posg8b = new BehaviorSubject('');
  private posg8c = new BehaviorSubject('');
  private posg8d = new BehaviorSubject('');
  private posg8e = new BehaviorSubject('');
  private posg8f = new BehaviorSubject('');
  private posg8g = new BehaviorSubject('');
  private posg8h = new BehaviorSubject('');

  private posg4a = new BehaviorSubject('');
  private posg4b = new BehaviorSubject('');
  private posg4c = new BehaviorSubject('');
  private posg4d = new BehaviorSubject('');

  private posg2a = new BehaviorSubject('');
  private posg2b = new BehaviorSubject('');

  private posg1a = new BehaviorSubject('');

  currentPosition1a = this.pos1a.asObservable();
  currentPosition2a = this.pos2a.asObservable();
  currentPosition1b = this.pos1b.asObservable();
  currentPosition2b = this.pos2b.asObservable();
  currentPosition1c = this.pos1c.asObservable();
  currentPosition2c = this.pos2c.asObservable();
  currentPosition1d = this.pos1d.asObservable();
  currentPosition2d = this.pos2d.asObservable();
  currentPosition1e = this.pos1e.asObservable();
  currentPosition2e = this.pos2e.asObservable();
  currentPosition1f = this.pos1f.asObservable();
  currentPosition2f = this.pos2f.asObservable();
  currentPosition1g = this.pos1g.asObservable();
  currentPosition2g = this.pos2g.asObservable();
  currentPosition1h = this.pos1h.asObservable();
  currentPosition2h = this.pos2h.asObservable();


  currentPositiong8a = this.posg8a.asObservable();
  currentPositiong8b = this.posg8b.asObservable();
  currentPositiong8c = this.posg8c.asObservable();
  currentPositiong8d = this.posg8d.asObservable();
  currentPositiong8e = this.posg8e.asObservable();
  currentPositiong8f = this.posg8f.asObservable();
  currentPositiong8g = this.posg8g.asObservable();
  currentPositiong8h = this.posg8h.asObservable();
  currentPositiong4a = this.posg4a.asObservable();
  currentPositiong4b = this.posg4b.asObservable();
  currentPositiong4c = this.posg4c.asObservable();
  currentPositiong4d = this.posg4d.asObservable();
  currentPositiong2a = this.posg2a.asObservable();
  currentPositiong2b = this.posg2b.asObservable();
  currentPositiong1a = this.posg1a.asObservable();



  constructor() {

  }

  updatePosition1a(pos1: string) {
    this.pos1a.next(pos1)
  }

  updatePosition2a(pos2: string) {
    this.pos2a.next(pos2)

  }
  updatePosition1b(pos1: string) {
    this.pos1b.next(pos1)
  }

  updatePosition2b(pos2: string) {
    this.pos2b.next(pos2)

  }
  updatePosition1c(pos1: string) {
    this.pos1c.next(pos1)
  }

  updatePosition2c(pos2: string) {
    this.pos2c.next(pos2)

  }
  updatePosition1d(pos1: string) {
    this.pos1d.next(pos1)
  }

  updatePosition2d(pos2: string) {
    this.pos2d.next(pos2)

  }
  updatePosition1e(pos1: string) {
    this.pos1e.next(pos1)
  }

  updatePosition2e(pos2: string) {
    this.pos2e.next(pos2)

  }
  updatePosition1f(pos1: string) {
    this.pos1f.next(pos1)
  }

  updatePosition2f(pos2: string) {
    this.pos2f.next(pos2)

  }
  updatePosition1g(pos1: string) {
    this.pos1g.next(pos1)
  }

  updatePosition2g(pos2: string) {
    this.pos2g.next(pos2)

  }
  updatePosition1h(pos1: string) {
    this.pos1h.next(pos1)
  }

  updatePosition2h(pos2: string) {
    this.pos2h.next(pos2)

  }




  updatePositiong8a(pos1: string) {
    this.posg8a.next(pos1);
  }

  updatePositiong8b(pos2: string) {
    this.posg8b.next(pos2)

  }
  updatePositiong8c(pos1: string) {
    this.posg8c.next(pos1)
  }

  updatePositiong8d(pos2: string) {
    this.posg8d.next(pos2)

  }
  updatePositiong8e(pos1: string) {
    this.posg8e.next(pos1)
  }

  updatePositiong8f(pos2: string) {
    this.posg8f.next(pos2)

  }
  updatePositiong8g(pos1: string) {
    this.posg8g.next(pos1)
  }

  updatePositiong8h(pos2: string) {
    this.posg8h.next(pos2)

  }


  updatePositiong4a(pos1: string) {
    this.posg4a.next(pos1)
  }

  updatePositiong4b(pos2: string) {
    this.posg4b.next(pos2)

  }
  updatePositiong4c(pos1: string) {
    this.posg4c.next(pos1)
  }

  updatePositiong4d(pos2: string) {
    this.posg4d.next(pos2)

  }


  updatePositiong2a(pos1: string) {
    this.posg2a.next(pos1)
  }

  updatePositiong2b(pos2: string) {
    this.posg2b.next(pos2)

  }
  updatePositiong1a(pos1: string) {
    this.posg1a.next(pos1)
  }

  
  resetPositions(countryName: string) {

    switch (countryName) {
      case (this.posg8a.value):
        this.posg8a.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8b.value):
        this.posg8b.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8c.value):
        this.posg8c.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8d.value):
        this.posg8d.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8e.value):
        this.posg8e.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8f.value):
        this.posg8f.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8g.value):
        this.posg8g.next('');
        this.reset4th(countryName);
        break;

      case (this.posg8h.value):
        this.posg8h.next('');
        this.reset4th(countryName);
        break;
    }

  }

  reset4th(countryName: string) {
    switch (countryName) {
      case (this.posg4a.value):
        this.posg4a.next('');
        this.reset2nd(countryName);
        break;

      case (this.posg4b.value):
        this.posg4b.next('');
        this.reset2nd(countryName);
        break;

      case (this.posg4c.value):
        this.posg4c.next('');
        this.reset2nd(countryName);
        break;

      case (this.posg4d.value):
        this.posg4d.next('');
        this.reset2nd(countryName);
        break;
    }
  }

  reset2nd(countryName: string) {
    switch (countryName) {
      case (this.posg2a.value):
        this.posg2a.next('');
        this.reset1st(countryName);
        break;

      case (this.posg2b.value):
        this.posg2b.next('');
        this.reset1st(countryName);
        break;
    }
  }

  reset1st(countryName: string) {
    if (countryName == this.posg1a.value) {
      this.posg1a.next('');
    }
    
  }

  getFixtureCode() :string {
    let code = '';
    let arrCnt: Array<string> = [
      this.pos1a.value, this.pos1b.value, this.pos2a.value, this.pos2b.value, this.pos1c.value,
      this.pos2c.value, this.pos1d.value, this.pos2d.value, this.pos1e.value, this.pos2e.value,
      this.pos1f.value, this.pos2f.value, this.pos1g.value, this.pos2g.value, this.pos1h.value,
      this.pos2h.value, this.posg8a.value, this.posg8b.value, this.posg8c.value, this.posg8d.value,
      this.posg8e.value, this.posg8f.value, this.posg8g.value, this.posg8h.value, this.posg4a.value,
      this.posg4b.value, this.posg4c.value, this.posg4d.value, this.posg2a.value, this.posg2b.value,
      this.posg1a.value
    ];

    for (let country of arrCnt) {
      code += Array.from(country)[0];
    }
    return code;
  }
}
