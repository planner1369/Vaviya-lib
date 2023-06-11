import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {storiesModel} from "../shared/stories";
import {StoryDataService} from "../shared/services/story-data.service";


@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  public title: string = ""
  public items: storiesModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private StoryDataService: StoryDataService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      switch (res['id']) {
        case "1":
          this.title = 'قصه‌های قدیمی';
          this.getItems();
          break;
        case "2":
          this.title = 'قصه‌هایی برای خواب';
          this.getItemsForSleep();
          break;
        case "3":
          this.title = 'قصه‌هایی برای نی نی‌ها';
          break;
        case "4":
          this.title = 'قصه‌های انگلیسی ساده';
          break;
        default:
          this.title = 'قصه‌های کودک'
      }
    });
  }

  getItems() {
    this.StoryDataService.getStory().subscribe(res => {
      this.items = res;
    })
  }

  getItemsForSleep() {
    this.StoryDataService.getStoryForSleep().subscribe(res => {
      console.log(res);
      this.items = res;
    })
  }

  goToStory(id: number) {
    this.router.navigate([`/story`], {queryParams: {storyId: id},}).then();
  }
}
