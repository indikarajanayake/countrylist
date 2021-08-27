import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { CountrysearchService } from '../countrysearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    countrySearch = new FormControl('')

  constructor(private countrySearchService: CountrysearchService ) { 
  
  }

  ngOnInit() {
    this.countrySearch.valueChanges.pipe(
      map((search)=> search.trim()),
      filter(search => search !=="" && search.length>2),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(async (search) => this.countrySearchService.searchCountry(search)
      ),
      
    ).subscribe();

  }

}
