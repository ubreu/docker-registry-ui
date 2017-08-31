import { Component, OnInit, Input } from '@angular/core';

import { Repository } from '../../repository.model';
import { RepositoryService } from '../../repository.service';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {
  @Input() repository: Repository;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
  }

  onSelected() {
    this.repositoryService.repositorySelected.emit(this.repository);
  }
}
