import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountrysearchService {

  private countryListSubject = new BehaviorSubject<any>("");

  constructor(private http: HttpClient) { }

  searchCountry(term: string){
    console.log(term);
    const url = `https://restcountries.eu/rest/v2/name/${term}`
    this.http.get(url).subscribe({
      next: data => {
        this.countryListSubject.next(data);
    },
    error: error => {
        console.error('There was an error!', error);
    }
  });
  }

  onMessage(): Observable<any> {
    return this.countryListSubject.asObservable();
}

}
