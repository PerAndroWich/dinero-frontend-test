import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { selectCancelSubscriptionFeature, CancelSubscriptionState } from './store/cancel-subscription.selector';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: [ './cancel-subscription.component.scss' ]
})
export class CancelSubscriptionComponent {

  public state$ = this._store.pipe(select(selectCancelSubscriptionFeature));

  constructor(
    private _store: Store<CancelSubscriptionState>,
  ) {}
}
