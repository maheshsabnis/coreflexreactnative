/* eslint-disable quotes */
import {posts} from './collections';
export class Blogger {
  constructor() {
    this.posts = posts;
  }

  getPosts() {
    return this.posts;
  }
  createNewPost(post) {
    this.posts.push(post);
    return this.posts;
  }
}
