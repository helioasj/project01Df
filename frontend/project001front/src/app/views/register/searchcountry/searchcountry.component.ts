import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Search } from './search.model';

@Component({
  selector: 'agatron-searchcountry',
  templateUrl: './searchcountry.component.html',
  styleUrls: ['./searchcountry.component.css']
})
export class SearchcountryComponent implements OnInit {

  search: Search = {
    name: '',
    code: ''
  }
  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Pesquisar Indicadores ',
      icon: 'search',
      routerUrl: '/search'
    }
  }

  ngOnInit(): void {
  }

  searchInfoCountry(): void {
    console.log(this.search)
    const url = "search/found/"+ this.search.code;
    console.log(url)
    this.router.navigate([url])
  }
  


}
