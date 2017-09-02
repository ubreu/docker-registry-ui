import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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
      const observables: Observable<Manifest>[] = [];
      selectedRepository.tags.forEach(tag => {
        observables.push(this.repositoryService.manifest({ name: repository.name, tag: tag }));
      });
      Observable.forkJoin(observables).subscribe(manifests => {
        this.manifests = manifests;
      });
    });
  }
}
