import { Component, OnInit } from '@angular/core';

import { Repository } from '../repository.model';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[];

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositoryService.repositories().subscribe(repositories => {
      this.repositories = repositories;
      this.repositories.forEach(r => console.log(r));
    });
  }
}
