import {Component, OnInit} from '@angular/core';
import {StoryDataService} from "../../shared/services/story-data.service";
import {storiesModel} from "../../shared/stories";

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  public story: storiesModel[] = []

  constructor(private StoryDataService: StoryDataService) {
  }

  ngOnInit() {
    this.getStoryData();
  }

  getStoryData() {
    this.StoryDataService.getStory().subscribe(res => {
      this.story = res;
    })
  }
}
