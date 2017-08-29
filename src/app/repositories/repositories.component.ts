import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Repository } from './repository.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  providers: [RepositoryService],
})
export class RepositoriesComponent implements OnInit {

  private repositories: Repository[];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.repositoryService.repositories().subscribe(repositories => {
      this.repositories = repositories;
      this.repositories.forEach(r => console.log(r));
    });
  }
}
