import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

import { HeaderComponent } from '../../shared/header-component/header.component';
import { Manifest } from '../repository.model';

@Component({
  selector: 'app-manifest-list',
  templateUrl: './manifest-list.component.html',
  styleUrls: ['./manifest-list.component.scss']
})
export class ManifestListComponent {
  gridOptions: GridOptions;
  columnDefs: any[];
  @Input() rowData: any[];
  @Input() manifests: Manifest[];

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.floatingFilter = true;
    this.gridOptions.defaultColDef = {
      headerComponentFramework: <{ new(): HeaderComponent }>HeaderComponent,
      headerComponentParams: {
        menuIcon: 'fa-bars'
      }
    };

    this.columnDefs = [
      { headerName: 'Tag', field: 'tag', headerComponentParams: { menuIcon: 'fa fa-qrcode' } },
      { headerName: 'Image ID', field: 'metadata.id', headerComponentParams: { menuIcon: 'fa fa-qrcode' } },
      { headerName: 'Created', field: 'metadata.created', headerComponentParams: { menuIcon: 'fa fa-calendar' } },
      { headerName: 'Author', field: 'metadata.labels.maintainer', headerComponentParams: { menuIcon: 'fa fa-user' } },
      { headerName: 'Docker Version', field: 'metadata.docker_version', headerComponentParams: { menuIcon: 'fa fa-ship' } }
    ];

  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
}
