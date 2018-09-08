import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() {
    this.postLoveIts = 0;
    this.postCreatedAt = new Date();
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts++;
    console.log('Loved it ! : ' + this.postLoveIts);
  }

  onDontLoveIt() {
    this.postLoveIts--;
    console.log('Did not love it ! : ' + this.postLoveIts);
  }

}
