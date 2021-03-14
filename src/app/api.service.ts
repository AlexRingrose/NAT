import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    return this._http.get(this.url + '/snacks', {headers: header});
  }

  readData() {
    this.getData().subscribe((res) => {
      console.log(res);
    });
  }
}
