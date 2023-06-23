import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableMetaService {
  private baseUrl: string;
  constructor(private httpService: HttpService) {
    this.baseUrl = environment.baseUrl;
  }

  addTableMeta(payload: any): Observable<any> {
    const url = this.baseUrl + 'tableMeta';
    return this.httpService.post<any>(url, payload);
  }

  getTableMetaList(payload:any): Observable<any> {
    const url = this.baseUrl + 'tableMeta/Index';
    return this.httpService.post<any>(url, payload);
  }
  
  getTableMetaById(id:string): Observable<any> {
    const url = this.baseUrl + 'query';
    return this.httpService.get<any>(url);
  }
}
