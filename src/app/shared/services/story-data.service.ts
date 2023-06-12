import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import * as storyData from "../mainStory.json";
import * as storyDataForSleep from "../storyForSleep.json";
import * as storyDataForBaby from "../storyForBaby.json";
import * as storyDataForEnglish from "../storyForEnglish.json";

@Injectable({
  providedIn: 'root'
})
export class StoryDataService {
  data: any = storyData;
  dataSleep: any = storyDataForSleep;
  dataBaby: any = storyDataForBaby;
  dataEnglish: any = storyDataForEnglish;

  constructor() {
  }

  getStory(): Observable<any> {
    return of(this.data.body)
  }

  getStoryForSleep(): Observable<any> {
    return of(this.dataSleep.body)
  }

  getStoryForBaby(): Observable<any> {
    return of(this.dataBaby.body)
  }

  getStoryForEnglish(): Observable<any> {
    return of(this.dataEnglish.body)
  }
}
