import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import * as storyData from "../mainStory.json"
import {storiesModel} from "../stories";

@Injectable({
  providedIn: 'root'
})
export class StoryDataService {
  data: any = storyData

  constructor() {
  }

  getStory(): Observable<any> {
    return of(this.data.body)
  }
}
