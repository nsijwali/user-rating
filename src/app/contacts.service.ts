import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  constructor(  private http: HttpClient) { }
  getContacts (): Observable<any> {
  var url="/assets/people.json"
  return this.http.get(url, httpOptions);
}
}
