import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Country } from './country.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CountryInfos } from './country-infos.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = 'http://localhost:3001/countries'

  baseUrlWorldBank = 'http://localhost:3001/worldbank'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError?['msg-error']:['msg-success']
    })
  }

  create(country: Country): Observable<Country>{
    return this.http.post<Country>(this.baseUrl, country).pipe(
      map(obj => obj),
      catchError(e=> this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  read(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl)
  }

  readById(id: string): Observable<Country> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Country>(url)
  }

  update(country: Country): Observable<Country> {
    const url = `${this.baseUrl}/${country.id}`
    return this.http.put<Country>(url, country)
  }

  delete(id: number): Observable<Country> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Country>(url)
  }

  findByCode(code: string): Observable<CountryInfos> {
    const url = `${this.baseUrlWorldBank}/${code}`
    return this.http.get<CountryInfos>(url)
  }
}
