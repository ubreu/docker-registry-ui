import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import * as Autolinker from 'autolinker';
import * as moment from 'moment';
import * as _ from 'lodash';
import Moment = moment.Moment;

import { AppConfig } from '../../app.config';
import { RepositoryWithTags, Manifest } from '../repository.model';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-manifest-list',
  templateUrl: './manifest-list.component.html',
  styleUrls: ['./manifest-list.component.scss']
})
export class ManifestListComponent implements OnInit {
  repository: RepositoryWithTags;
  filteredTags: string[] = [];
  manifests: Manifest[] = [];
  selectedManifest: Manifest;
  pageSize = 15;
  registryDomainName: String;

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute, private appConfig: AppConfig) {
    this.registryDomainName = this.appConfig.getRegistryDomainName();
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .switchMap((params: ParamMap) => this.repositoryService.tags({ name: params.get('name') }))
      .subscribe(repository => {
        this.repository = repository;
        this.repository.tags = _.reverse(_.sortBy(this.repository.tags));
        this.filteredTags = Object.assign([], this.repository.tags);
      });
  }

  onSelectManifest(manifest) {
    this.selectedManifest = manifest;
  }

  onNameFilterChanged(name) {
    if (!name) {
      this.filteredTags = Object.assign([], this.repository.tags);
    } else {
      this.filteredTags = Object.assign([], this.repository.tags)
        .filter(tag => tag.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    this.pageChange(1);
  }

  pageChange(currentPage) {
    if (this.repository) {
      const start = (currentPage - 1) * this.pageSize;
      const end = Math.min(this.filteredTags.length, start + this.pageSize);
      const observables: Observable<Manifest>[] = [];
      for (let i = start; i < end; i++) {
        observables.push(this.repositoryService.manifest({ name: this.repository.name, tag: this.filteredTags[i] }));
      }
      Observable.forkJoin(observables).subscribe(manifests => {
        this.manifests = manifests;
      });
    }
  }

  authorFormatter(params) {
    return Autolinker.link(params.value);
  }

  dateFormatter(params) {
    return moment(params.value).fromNow();
  }
}
