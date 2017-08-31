import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Manifest } from '../../repository.model';

@Component({
  selector: 'app-manifest-item',
  templateUrl: './manifest-item.component.html',
  styleUrls: ['./manifest-item.component.scss']
})
export class ManifestItemComponent {
  @Input() manifest: Manifest;
}
