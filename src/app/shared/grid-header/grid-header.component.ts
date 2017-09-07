import { Component, ElementRef } from '@angular/core';
import { IHeaderParams } from 'ag-grid/main';
import { IHeaderAngularComp } from 'ag-grid-angular/main';

interface MyParams extends IHeaderParams {
  menuIcon: string;
}

@Component({
  templateUrl: 'grid-header.component.html',
  styleUrls: ['grid-header.component.scss']
})
export class GridHeaderComponent implements IHeaderAngularComp {
  public params: MyParams;
  public sorted: string;
  private elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  agInit(params: MyParams): void {
    this.params = params;
    this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    this.onSortChanged();
  }

  onMenuClick() {
    this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
  }

  onSortRequested(order, event) {
    this.params.setSort(order, event.shiftKey);
  }

  onSortChanged() {
    if (this.params.column.isSortAscending()) {
      this.sorted = 'asc';
    } else if (this.params.column.isSortDescending()) {
      this.sorted = 'desc';
    }
  }

  private querySelector(selector: string) {
    return <HTMLElement>this.elementRef.nativeElement.querySelector(
      '.customHeaderMenuButton', selector);
  }
}
