import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Country } from '../Country'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'http://localhost:5000/countries'

  constructor(
    private http: HttpClient
  ) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl)
  }


  updateFirst(country: Country): Observable<Country> {
    const url = `${this.apiUrl}/${country.id}`
    return this.http.put<Country>(url, country, httpOptions)
  }

  updateSecond(country: Country): Observable<Country> {
    const url = `${this.apiUrl}/${country.id}`
    return this.http.put<Country>(url, country, httpOptions)
  }
}
