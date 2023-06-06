import {Component, OnInit} from '@angular/core';
import {StoryDataService} from "../../shared/services/story-data.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  public story: any[] = []

  constructor(private StoryDataService: StoryDataService) {
  }

  ngOnInit() {
    this.getStoryData();
  }

  getStoryData() {
    this.StoryDataService.getStory().subscribe(res => {
      console.log(res);
    })
  }
}
