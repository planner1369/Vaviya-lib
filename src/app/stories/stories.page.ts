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
  public title: string = "";
  public typeId: string = "";
  public items: storiesModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private StoryDataService: StoryDataService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.typeId = res['id']
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
          this.getItemsForBaby();
          break;
        case "4":
          this.title = 'قصه‌های انگلیسی ساده';
          this.getItemsForEnglish();
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
      this.items = res;
    })
  }

  getItemsForBaby() {
    this.StoryDataService.getStoryForBaby().subscribe(res => {
      this.items = res;
    })
  }

  getItemsForEnglish() {
    this.StoryDataService.getStoryForEnglish().subscribe(res => {
      this.items = res;
    })
  }

  goToStory(id: number) {
    this.router.navigate([`/story`], {queryParams: {storyId: id, typeId: this.typeId},}).then();
  }
}
