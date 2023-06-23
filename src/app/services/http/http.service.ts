import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBiYXBjbyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiI2Mzc3MTM0NC1hZDRmLTRmZDItYTJmMC1iZmE4NjU1ZDIyZmMiLCJTZXNzaW9uSWQiOiJkZDg2YmQzYi0xN2NkLTRjODUtOWYxZS1jZjJlODMzYThkMjMiLCJuYmYiOjE2ODc0MjQzMjUsImV4cCI6MTY4ODI4ODMyNSwiaWF0IjoxNjg3NDI0MzI1fQ.tiOU0uTp4r2TLh4k3rwhUQbHijQx2kdaKmlxBOUI-NA3_LNYR3ANB5S5-kDqAOFllovCt7wBphtu9yr-0pk-Lw'
  constructor(private http: HttpClient) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
  const headers = { 'Authorization': `Bearer ${this.token}`};
  

    return this.http.get<T>(url, { headers, params });
  }

  post<T>(url: string, body: any): Observable<T> {
  const headers = { 'Authorization': `Bearer ${this.token}`};
  
    return this.http.post<T>(url, body, { headers });
  }

  put<T>(url: string, body: any): Observable<T> {
  const headers = { 'Authorization': `Bearer ${this.token}`};
  
    return this.http.put<T>(url, body, { headers });
  }

  delete<T>(url: string): Observable<T> {
  const headers = { 'Authorization': `Bearer ${this.token}`};
  
    return this.http.delete<T>(url, { headers});
  }

  // You can add more methods like patch, head, options, etc., as needed

}
