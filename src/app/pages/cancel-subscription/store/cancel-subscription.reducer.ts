import { createReducer, Action } from '@ngrx/store';

import { initialCancelSubscriptionState, CancelSubscriptionState } from './cancel-subscription.selector';

const reducer = createReducer(
  initialCancelSubscriptionState,
);

export function cancelSubscriptionReducer(state: CancelSubscriptionState, action: Action) {
  return reducer(state, action);
}
