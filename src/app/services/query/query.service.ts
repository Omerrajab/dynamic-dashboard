import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private baseUrl: string;
  tempdata = [
    {
      "studentId": 1,
      "attendance": true,
      "marks": 85
    },
    {
      "studentId": 2,
      "attendance": false,
      "marks": 72
    },
    {
      "studentId": 3,
      "attendance": true,
      "marks": 90
    },
    {
      "studentId": 4,
      "attendance": true,
      "marks": 78
    },
    {
      "studentId": 5,
      "attendance": true,
      "marks": 95
    },
    {
      "studentId": 6,
      "attendance": false,
      "marks": 68
    },
    {
      "studentId": 7,
      "attendance": true,
      "marks": 88
    },
    {
      "studentId": 8,
      "attendance": true,
      "marks": 92
    },
    {
      "studentId": 9,
      "attendance": true,
      "marks": 79
    },
    {
      "studentId": 10,
      "attendance": false,
      "marks": 65
    }
  ]
  constructor(private httpService: HttpService) {
    this.baseUrl = environment.baseUrl;
  }

  getQueryData(): Observable<any> {
    const url = this.baseUrl + 'query';
    return this.httpService.get<any>(url);
  }

  postQueryData(payload: any): Observable<any> {
    const url = this.baseUrl + 'query';
    return this.httpService.post<any>(url, payload);
  }

  // Add more methods as needed
  getQueryResult(query: string): Observable<any> {
    return new Observable<any>(observer => {
      observer.next(this.tempdata);
      observer.complete();
    });
  }
}
