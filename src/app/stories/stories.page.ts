import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export interface Stories {
  title: string,
  src: string,
  id: number,
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  public title: string = ""
  public items: Array<Stories> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.getItems();
    this.activatedRoute.queryParams.subscribe(res => {
      switch (+res[0]) {
        case 1:
          this.title = 'قصه‌های قدیمی خارجی';
          break;
        case 2:
          this.title = 'قصه‌های قدیمی ایرانی';
          break;
        case 3:
          this.title = 'قصه‌های جدید خارجی';
          break;
        case 4:
          this.title = 'قصه‌های مصور';
          break;
        default:
          this.title = 'قصه‌های کودک'
      }
    });

  }

  getItems() {
    this.items = [
      {title: 'زیبای خفته', src: "../../assets/images/type-1/1/Untitled-1.jpg", id: 1},
      {title: 'کتاب کودک ۱', src: "assets/images/home.jpg", id: 2},
      {title: 'کتاب کودک ۱', src: "assets/images/home.jpg", id: 3},
    ]
  }

  goToStory(id: number) {
    this.router.navigate([`stories/${id}`]).then();
  }
}
