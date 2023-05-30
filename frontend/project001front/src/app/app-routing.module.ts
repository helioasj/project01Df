import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CountryListComponent } from './views/register/country-list/country-list.component';
import { CountryCreateComponent } from './components/country/country-create/country-create.component';
import { CountryUpdateComponent } from './components/country/country-update/country-update.component';
import { CountryDeleteComponent } from './components/country/country-delete/country-delete.component';
import { SearchcountryComponent } from './views/register/searchcountry/searchcountry.component';
import { CountryFoundComponent } from './components/country/country-found/country-found.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "countries",
    component: CountryListComponent
  },
  {
    path: "countries/create",
    component: CountryCreateComponent
  },
  {
    path: "countries/update/:id",
    component: CountryUpdateComponent
  },
  {
    path: "countries/delete/:id",
    component: CountryDeleteComponent
  },
  {
    path: "search",
    component: SearchcountryComponent
  },
  {
    path: "search/found/:codigo",
    component: CountryFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
