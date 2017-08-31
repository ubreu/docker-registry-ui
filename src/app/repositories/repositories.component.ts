import { Component, OnInit } from '@angular/core';

import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  providers: [RepositoryService]
})
export class RepositoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
