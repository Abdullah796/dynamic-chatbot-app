import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  endpoint = environment.APIEndpoint;

  constructor(private http: HttpClient) { }

  checkAPIStatus() {
    return this.http.get<any>(this.endpoint);
  }

  asked_admission_cell(request: any) {
    return this.http.post<any>(this.endpoint + "/asked-admission-cell", request);
  }

  asked_covid(request: any) {
    return this.http.post<any>(this.endpoint + "/asked-covid-faq", request);
  }
}
