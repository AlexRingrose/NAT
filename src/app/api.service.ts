import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

// This service is the point of interchange for data going to and from the API

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // In a Production environment api credentials/tokens should be secured in the server environment and imported rather
  // than in the codebase.
  private url = 'http://localhost:3000';
  private authToken = '33b55673-57c7-413f-83ed-5b4ae8d18827';

  constructor(private _http: HttpClient) { }

  // This method returns the response from api
  getData() {
    // Setting the header to contain the authorization token for the backend
    const header = new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
    });

    return this._http.get(this.url + '/snacks', {headers: header} ).pipe(catchError(this.handleError));
  }

  setData(snackId){
    const header = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });
    this._http.post(this.url + '/snacks/vote/' + snackId, {}, {headers: header} ).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    alert('There was an issue connecting to the server. Please try again later.');
    return throwError(error);
  }
}
