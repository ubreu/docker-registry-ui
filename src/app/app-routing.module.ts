import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepositoryListComponent } from './repositories/repository-list/repository-list.component';
import { ManifestListComponent } from './repositories/manifest-list/manifest-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full' },
  { path: 'manifests', component: ManifestListComponent },
  { path: 'repositories', component: RepositoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
