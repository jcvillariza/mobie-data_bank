import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  post<T> (path: string, data: any) {
    return this.http.post<T>(`${environment.apiUrl}${path}`, JSON.stringify(data), httpOptions)
      .toPromise()
      .catch(this.handleError);
  }

  get<T> (path: string) {
    return this.http.get<T>(`${environment.apiUrl}${path}`, httpOptions)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log("ERROR: ", error);

    return Promise.reject(error || 'Server error');
  }
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};