import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  private readonly url = 'https://api.github.com/users/leifermendez/repos';

  constructor(private httpClient: HttpClient) { }

  LoadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner&per_page=100`)
    .pipe(
      map(( item:any) => item.filter(value => !value.fork)),
      map(( item:any) => item.filter(value => (value.stargazers_count > 3))) 
    )
  };

}
