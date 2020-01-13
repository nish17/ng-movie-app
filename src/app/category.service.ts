import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryURL = 'https://movie-search-project.herokuapp.com//?format=json';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.http.get<string[]>(this.categoryURL, {headers: headers}).pipe(pluck('categories'));
      // .pipe(
      //   catchError(this.handleError<string[]>('getCategories', []))
      // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
