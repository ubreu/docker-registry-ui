import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GridOptions } from 'ag-grid/main';
import * as Autolinker from 'autolinker';
import * as moment from 'moment';
import * as _ from 'lodash';
import Moment = moment.Moment;

import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { RepositoryWithTags, Manifest } from '../repository.model';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-manifest-list',
  templateUrl: './manifest-list.component.html',
  styleUrls: ['./manifest-list.component.scss']
})
export class ManifestListComponent implements OnInit {
  gridOptions: GridOptions;
  columnDefs: any[];
  repository: RepositoryWithTags;
  manifests: Manifest[];
  selectedManifest: Manifest;
  tableWidth: number;
  tableHeight: number;

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.defaultColDef = {
      headerComponentFramework: <{ new(): GridHeaderComponent }>GridHeaderComponent,
      headerComponentParams: {
        menuIcon: 'fa-bars'
      }
    };

    this.columnDefs = [
      { headerName: 'Tag', field: 'tag', headerComponentParams: { menuIcon: 'fa fa-qrcode' } },
      {
        headerName: 'Created', field: 'metadata.created', valueFormatter: this.dateFormatter,
        headerComponentParams: { menuIcon: 'fa fa-calendar' }
      },
      {
        headerName: 'Author', field: 'metadata.author', valueFormatter: this.authorFormatter,
        headerComponentParams: { menuIcon: 'fa fa-user' }
      },
      { headerName: 'Docker Version', field: 'metadata.docker_version', headerComponentParams: { menuIcon: 'fa fa-ship' } },
      { headerName: 'OS', field: 'metadata.os', headerComponentParams: { menuIcon: 'fa fa-laptop' } }
    ];
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.repositoryService.tags({ name: params.get('namespace') + '/' + params.get('name') }))
      .subscribe(repository => {
        this.repository = repository;
        const observables: Observable<Manifest>[] = [];
        this.repository.tags = _.reverse(_.sortBy(this.repository.tags));
        repository.tags.forEach(tag => {
          observables.push(this.repositoryService.manifest({ name: repository.name, tag: tag }));
        });
        Observable.forkJoin(observables).subscribe(manifests => {
          this.manifests = manifests;

          this.tableHeight = Math.min(30 * manifests.length + 50, 400);
          this.tableWidth = 1200;
          this.gridOptions.api.doLayout();
        });
      });
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  onSelectionChanged(event) {
    this.selectedManifest = event.api.getSelectedRows()[0];
  }

  authorFormatter(params) {
    return Autolinker.link(params.value);
  }

  dateFormatter(params) {
    return moment(params.value).fromNow();
  }
}
