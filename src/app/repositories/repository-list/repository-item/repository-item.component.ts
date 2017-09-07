import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Repository } from '../../repository.model';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent {
  @Input() repository: Repository;
}
