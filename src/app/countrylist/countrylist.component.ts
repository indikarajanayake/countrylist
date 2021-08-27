import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { CountrysearchService } from '../countrysearch.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.scss']
})
export class CountrylistComponent implements OnInit {
  messages: Observable<any> | undefined;
  subscription!: Subscription;
  constructor(private countrySearchService: CountrysearchService) {

   }

  ngOnInit(): void {
     // subscribe to home component messages
    this.messages = this.countrySearchService.onMessage().pipe(
      startWith([])
    );
  }

}
