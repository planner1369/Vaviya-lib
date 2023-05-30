import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

export interface Stories {
  title: string,
  src: string
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  public title: string = ""
  public items: Array<Stories> = [];

  constructor(private activatedRoute: ActivatedRoute) {
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
      {title: 'کتاب کودک ۱', src: "assets/images/home.jpg"},
      {title: 'کتاب کودک ۱', src: "assets/images/home.jpg"},
      {title: 'کتاب کودک ۱', src: "assets/images/home.jpg"},
    ]
  }
}
