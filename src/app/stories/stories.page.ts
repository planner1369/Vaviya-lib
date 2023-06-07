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
          this.title = 'قصه‌های قدیمی خارجی';
          break;
        case "2":
          this.title = 'قصه‌های قدیمی ایرانی';
          break;
        case "3":
          this.title = 'قصه‌های جدید خارجی';
          break;
        case "4":
          this.title = 'قصه‌های مصور';
          break;
        default:
          this.title = 'قصه‌های کودک'
      }
    });
    this.getItems();
  }

  getItems() {
    this.StoryDataService.getStory().subscribe(res => {
      console.log(res);
      this.items = res;
    })

  }

  goToStory(id: number) {
    this.router.navigate([`/story`], {queryParams: {storyId: id},}).then();
  }
}
