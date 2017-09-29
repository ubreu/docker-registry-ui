import { Component, OnInit, Input } from '@angular/core';

import { Manifest, Label } from '../../repository.model';

@Component({
  selector: 'app-manifest-detail',
  templateUrl: './manifest-detail.component.html',
  styleUrls: ['./manifest-detail.component.scss']
})
export class ManifestDetailComponent implements OnInit {
  @Input() manifest: Manifest;

  constructor() { }

  ngOnInit() {
  }

  hasLabels() {
    return this.manifest.metadata.labels && Object.keys(this.manifest.metadata.labels).length;
  }

}
