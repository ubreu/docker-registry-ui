import { Component, OnInit } from '@angular/core';

import { Repository, RepositoryWithTags, Manifest } from '../repository.model';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[];
  manifests: Manifest[];

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositoryService.repositories().subscribe(repositories => {
      this.repositories = repositories;
    });
  }

  onSelected(repository: Repository) {
    this.repositoryService.tags(repository).subscribe(selectedRepository => {
      this.manifests = [];
      selectedRepository.tags.forEach(tag => {
        this.repositoryService.manifest({ name: repository.name, tag: tag }).subscribe(manifest => {
          this.manifests.push(manifest);
        });
      });
    });
  }
}
