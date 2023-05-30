import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CountryListComponent } from './views/register/country-list/country-list.component';
import { RedDirective } from './directives/red.directive';
import { CountryCreateComponent } from './components/country/country-create/country-create.component';
import { CountryReadComponent } from './components/country/country-read/country-read.component';
import { CountryUpdateComponent } from './components/country/country-update/country-update.component';
import { CountryDeleteComponent } from './components/country/country-delete/country-delete.component';
import { SearchcountryComponent } from './views/register/searchcountry/searchcountry.component';
import { CountryFoundComponent } from './components/country/country-found/country-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CountryListComponent,
    RedDirective,
    CountryCreateComponent,
    CountryReadComponent,
    CountryUpdateComponent,
    CountryDeleteComponent,
    SearchcountryComponent,
    CountryFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
