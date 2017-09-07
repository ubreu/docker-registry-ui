import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { NamePipe } from '../../shared/name.pipe';
import { Repository, Manifest } from '../repository.model';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[];
  manifests: Manifest[];
  totalImageCount: number;
  totalRepositoryCount: number;
  nameFilter: string;

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositoryService.repositories().subscribe(repositories => {
      this.repositories = repositories;
      const iteratee = (it) => it.name.substring(0, it.name.indexOf('/'));
      const result = _.map(_.uniqBy(repositories, iteratee), iteratee);
      this.totalRepositoryCount = result.length;
      this.totalImageCount = repositories.length;
    });
  }
}
