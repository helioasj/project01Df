import { CountryInfos } from './../country-infos.model';
import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'agatron-country-found',
  templateUrl: './country-found.component.html',
  styleUrls: ['./country-found.component.css']
})
export class CountryFoundComponent implements OnInit {

  countryInfos: CountryInfos= {

    name: '',
    code: ''
  }
  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('codigo')!
    console.log(code)
    this.countryService.findByCode(code).subscribe(countryInfos => {
      this.countryInfos = countryInfos
      console.log(countryInfos)
    })

  }



}
