import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Manifest } from '../repository.model';

@Component({
  selector: 'app-manifest-list',
  templateUrl: './manifest-list.component.html',
  styleUrls: ['./manifest-list.component.scss']
})
export class ManifestListComponent {
  @Input() manifests: Manifest[];
}
