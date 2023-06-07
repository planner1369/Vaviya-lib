import {Component, OnInit} from '@angular/core';
import {StoryDataService} from "../../shared/services/story-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  public story: any = {}

  constructor(private StoryDataService: StoryDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.getStoryData(+res['storyId']);
    });
  }

  getStoryData(storyId: number) {
    this.StoryDataService.getStory().subscribe(res => {
      this.story = res.find((element: any) => element.id == storyId);
    })
  }
}
