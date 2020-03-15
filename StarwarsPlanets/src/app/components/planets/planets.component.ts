import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Planet } from '../../interfaces/planet.object';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];
  error: boolean;

  constructor(private swapiService: SwapiService, private router: Router) { }

  ngOnInit(): void {
    this.error = false;
    this.swapiService.getPlanets().subscribe(
      planetsObj => this.planets = planetsObj.results,
      () => this.error = true
    );
  }

  goToPlanet(planet: Planet) {
    const endpointSplit = planet.url.split('/');
    const url = 'planets/' + endpointSplit[endpointSplit.length - 2];
    this.router.navigateByUrl(url);
  }


}
