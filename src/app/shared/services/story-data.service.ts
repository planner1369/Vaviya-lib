import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoryDataService {

  constructor(private http: HttpClient) { }

  getStory(): Observable<any> {
    return this.http.get<any>(`mainStory.json`);
  }
}
