import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import * as storyData from "../mainStory.json";
import * as storyDataForSleep from "../storyForSleep.json";

@Injectable({
  providedIn: 'root'
})
export class StoryDataService {
  data: any = storyData;
  dataSleep: any = storyDataForSleep;

  constructor() {
  }

  getStory(): Observable<any> {
    return of(this.data.body)
  }

  getStoryForSleep(): Observable<any> {
    return of(this.dataSleep.body)
  }
}
