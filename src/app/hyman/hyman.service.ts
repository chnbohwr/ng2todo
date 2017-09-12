import { Injectable } from '@angular/core';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class HymanService {

  constructor() { }
  getPosts = () => axios.get(`${baseUrl}/posts`);
}
