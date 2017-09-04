import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryListComponent } from './repositories/repository-list/repository-list.component';
import { RepositoryItemComponent } from './repositories/repository-list/repository-item/repository-item.component';
import { ManifestListComponent } from './repositories/manifest-list/manifest-list.component';
import { RepositoryService } from './repositories/repository.service';

import { KeysPipe } from './shared/keys.pipe';
import { HeaderComponent } from './shared/header-component/header.component';
import { ManifestDetailComponent } from './repositories/manifest-list/manifest-detail/manifest-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoriesComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    ManifestListComponent,
    ManifestDetailComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([HeaderComponent]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
