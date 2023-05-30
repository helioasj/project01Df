import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'agatron-country-read',
  templateUrl: './country-read.component.html',
  styleUrls: ['./country-read.component.css']
})
export class CountryReadComponent implements OnInit {

  countries: Country[]=[];

  constructor(private contryService: CountryService) { }

  ngOnInit(): void {
    this.contryService.read().subscribe(coyntries =>{
      this.countries = coyntries
      console.log(coyntries)
    })
  }

}
