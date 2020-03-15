import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planets } from '../interfaces/planets.object';
import { PlanetDetails } from '../interfaces/planet-details.object';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  cacheObj = {};

  constructor(private httpClient: HttpClient) { }

  getPlanets(): Observable<Planets> {
    // Der er sat en proxy op i /src/proxy.conf.json, for at håndtere manglende CORS implementering på swapi.co
    const endpoint = '/api/planets';
    return this.cacheObj[endpoint] && of(this.cacheObj[endpoint]) || this.httpClient.get<Planets>(endpoint)
      .pipe(map(response => {
        this.cacheObj[endpoint] = response;
        return response;
      }));
  }

  getPlanetDetails(planetNumber: string): Observable<PlanetDetails> {
    const endpoint = '/api/planets/' + planetNumber;
    return this.cacheObj[endpoint] && of(this.cacheObj[endpoint]) || this.httpClient.get<PlanetDetails>(endpoint)
      .pipe(map(response => {
        this.cacheObj[endpoint] = response;
        return response;
      }));
  }

}
