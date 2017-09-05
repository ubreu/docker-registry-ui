import { Component, Input } from '@angular/core';

import { Repository } from '../../repositories/repository.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() repository: Repository;
}
