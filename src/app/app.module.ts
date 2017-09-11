import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfig, AppConfigLoader } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinkyModule } from 'angular-linky';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { RepositoryListComponent } from './repositories/repository-list/repository-list.component';
import { RepositoryItemComponent } from './repositories/repository-list/repository-item/repository-item.component';
import { ManifestListComponent } from './repositories/manifest-list/manifest-list.component';
import { RepositoryService } from './repositories/repository.service';

import { KeysPipe } from './shared/keys.pipe';
import { NamePipe } from './shared/name.pipe';
import { ManifestDetailComponent } from './repositories/manifest-list/manifest-detail/manifest-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    ManifestListComponent,
    ManifestDetailComponent,
    KeysPipe,
    NamePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    LinkyModule
  ],
  providers: [
    RepositoryService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigLoader,
      deps: [AppConfig],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
