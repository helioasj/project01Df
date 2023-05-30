import { Router } from '@angular/router';
import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'agatron-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {

  country: Country = {
    name: '',
    code: ''
  }
  
  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit(): void {
  }

  createCountry(): void {
    this.countryService.create(this.country).subscribe(() => {
      this.countryService.showMessage('A operacao foi realizada com sucesso!!!')
      this.router.navigate(['/countries'])
    })
    
  }

  cancelar(): void {
    this.router.navigate(['/countries'])
  }
}
