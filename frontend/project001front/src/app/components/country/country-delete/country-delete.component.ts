import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'agatron-country-delete',
  templateUrl: './country-delete.component.html',
  styleUrls: ['./country-delete.component.css']
})
export class CountryDeleteComponent implements OnInit {

  country: Country= {
    id: null,
    name: '',
    code: ''
  }
  constructor(private countryService: CountryService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.countryService.readById(id).subscribe(country => {
      this.country = country
    })
  }

  deleteCountry(): void {
    this.countryService.delete(this.country.id!).subscribe(()=>{
      this.countryService.showMessage('Registro excluido com sucesso!')
      this.router.navigate(['/countries'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/countries'])
  }

}
