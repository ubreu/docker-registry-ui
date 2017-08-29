import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { Repository } from './repository.model';

@Injectable()
export class RepositoryService {
  repositorySelected = new EventEmitter<Repository>();

  private eventsUrl = 'http://localhost:5000/v2';

  constructor(private http: HttpClient) { }

  repositories(): Observable<Repository[]> {
    const url = `${this.eventsUrl}/_catalog`;
    return this.http.get(url)
      .map(data => _.get(data, 'repositories'))
      .map(data => this.parseRepositories(data))
      .catch(this.handleError);
  }

  private parseRepositories = (repositories: Repository[]) => {
    return repositories.map(e => this.parseRepository(e));
  }

  private parseRepository(data: any): Repository {
    return {
      name: data
    };
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    return Observable.throw(`Failed to fetch registry catalog: ${error.message}`);
  }
}
