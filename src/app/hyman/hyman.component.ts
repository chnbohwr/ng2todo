import { Component, OnInit } from '@angular/core';
import { HymanService } from './hyman.service';

@Component({
  selector: 'app-hyman',
  templateUrl: './hyman.component.html',
  styleUrls: ['./hyman.component.css'],
  providers: [HymanService]
})
export class HymanComponent implements OnInit {

  private posts = [];

  constructor(private service: HymanService) {
    console.log(this.service);
  }

  async ngOnInit() {
    const result = await this.service.getPosts();
    this.posts = result.data;
  }

}
