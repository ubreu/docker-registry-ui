import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryListComponent } from './repositories/repository-list/repository-list.component';
import { RepositoryItemComponent } from './repositories/repository-list/repository-item/repository-item.component';
import { ManifestListComponent } from './repositories/manifest-list/manifest-list.component';
import { ManifestItemComponent } from './repositories/manifest-list/manifest-item/manifest-item.component';
import { KeysPipe } from './shared/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    ManifestListComponent,
    ManifestItemComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
