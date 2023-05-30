import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'agatron-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Sistema Integrado de Indicadores',
      icon: 'home',
      routerUrl: ''
    }

  }

  ngOnInit(): void {
  }

}
