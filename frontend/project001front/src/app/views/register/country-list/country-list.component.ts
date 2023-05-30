import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'agatron-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Paises',
      icon: 'travel_explore',
      routerUrl: '/countries'
    }
   }

  ngOnInit(): void {
  }

  navigateToCountryCreate():void {
    this.router.navigate(['/countries/create'])
  }

}
