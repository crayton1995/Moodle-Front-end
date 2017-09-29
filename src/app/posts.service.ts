import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('https://cfstack.vssdevelopment.com/dev/moodle/stacks?tagKey=TYPE&tagValue=TENANT')
      .map(res => res.json());
  }
}
