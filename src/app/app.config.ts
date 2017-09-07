import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

  private config: Object = null;

  constructor(private http: HttpClient) { }

  public getRegistryHost() {
    return this.config['registryHost'];
  }

  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config.json').catch((error: any): any => {
        resolve(true);
        return Observable.throw(error.json().error || 'Failed to load configuration file "config.json"');
      }).subscribe((response) => {
        this.config = response;
        resolve(true);
      });
    });
  }
}

export function AppConfigLoader(appConfig: AppConfig) {
  return () => appConfig.load();
}
