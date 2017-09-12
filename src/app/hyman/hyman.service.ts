import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import axios from 'axios';
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class HymanService {
  constructor(private http: Http) { }
  getPosts = () => this.http.get(`${baseUrl}/posts`).toPromise();
}
