import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'agatron-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.css']
})
export class CountryUpdateComponent implements OnInit {

  country: Country= {
    id: null,
    name: '',
    code: ''
  }
  constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.countryService.readById(id).subscribe(country => {
      this.country = country
    })
  }
  
  updateCountry(): void{
    this.countryService.update(this.country).subscribe(()=>{
      this.countryService.showMessage('Registro atualizado com sucesso!')
      this.router.navigate(['/countries'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/countries'])
  }
}
