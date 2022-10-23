import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private position1a = new BehaviorSubject('');
  private position2a = new BehaviorSubject('');

  private position1b = new BehaviorSubject('');
  private position2b = new BehaviorSubject('');

  private position1c = new BehaviorSubject('');
  private position2c = new BehaviorSubject('');

  private position1d = new BehaviorSubject('');
  private position2d = new BehaviorSubject('');

  private position1e = new BehaviorSubject('');
  private position2e = new BehaviorSubject('');

  private position1f = new BehaviorSubject('');
  private position2f = new BehaviorSubject('');

  private position1g = new BehaviorSubject('');
  private position2g = new BehaviorSubject('');

  private position1h = new BehaviorSubject('');
  private position2h = new BehaviorSubject('');

  currentPosition1a = this.position1a.asObservable();
  currentPosition2a = this.position2a.asObservable();
  currentPosition1b = this.position1b.asObservable();
  currentPosition2b = this.position2b.asObservable();
  currentPosition1c = this.position1c.asObservable();
  currentPosition2c = this.position2c.asObservable();
  currentPosition1d = this.position1d.asObservable();
  currentPosition2d = this.position2d.asObservable();
  currentPosition1e = this.position1e.asObservable();
  currentPosition2e = this.position2e.asObservable();
  currentPosition1f = this.position1f.asObservable();
  currentPosition2f = this.position2f.asObservable();
  currentPosition1g = this.position1g.asObservable();
  currentPosition2g = this.position2g.asObservable();
  currentPosition1h = this.position1h.asObservable();
  currentPosition2h = this.position2h.asObservable();

  constructor() {

  }
  updatePosition1a(pos1: string) {
    this.position1a.next(pos1)
  }

  updatePosition2a(pos2: string) {
    this.position2a.next(pos2)

  }
  updatePosition1b(pos1: string) {
    this.position1b.next(pos1)
  }

  updatePosition2b(pos2: string) {
    this.position2b.next(pos2)

  }
  updatePosition1c(pos1: string) {
    this.position1c.next(pos1)
  }

  updatePosition2c(pos2: string) {
    this.position2c.next(pos2)

  }
  updatePosition1d(pos1: string) {
    this.position1d.next(pos1)
  }

  updatePosition2d(pos2: string) {
    this.position2d.next(pos2)

  }
  updatePosition1e(pos1: string) {
    this.position1e.next(pos1)
  }

  updatePosition2e(pos2: string) {
    this.position2e.next(pos2)

  }
  updatePosition1f(pos1: string) {
    this.position1f.next(pos1)
  }

  updatePosition2f(pos2: string) {
    this.position2f.next(pos2)

  }
  updatePosition1g(pos1: string) {
    this.position1g.next(pos1)
  }

  updatePosition2g(pos2: string) {
    this.position2g.next(pos2)

  }
  updatePosition1h(pos1: string) {
    this.position1h.next(pos1)
  }

  updatePosition2h(pos2: string) {
    this.position2h.next(pos2)

  }

}
