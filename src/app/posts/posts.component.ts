import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  coins: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log("routing to posts componenet")
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(coins => {
      this.coins = coins;
    });
  }
}