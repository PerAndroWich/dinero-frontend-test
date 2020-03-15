import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SwapiService } from 'src/app/services/swapi.service';
import { PlanetDetails } from 'src/app/interfaces/planet-details.object';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planetDetails$: Observable<PlanetDetails>;
  showSpinner = true;
  error: boolean;

  constructor(private swapiService: SwapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.error = false;
    this.planetDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.swapiService.getPlanetDetails(params.get('id')))
    );
    this.planetDetails$.subscribe(
      () => { },
      () => this.error = true
    );

  }

}
