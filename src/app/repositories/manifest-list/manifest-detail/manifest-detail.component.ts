import { Component, OnInit, Input } from '@angular/core';

import { Manifest } from '../../repository.model';

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

}