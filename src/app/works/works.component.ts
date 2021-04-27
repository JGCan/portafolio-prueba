import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  repos: any;
  config: any;

  constructor( private githuService: GithubService) { }

  ngOnInit(): void {
    this.githuService.LoadRepos().subscribe({ 
      next: res => {
        this.repos = res
      }
    })
  }

}
