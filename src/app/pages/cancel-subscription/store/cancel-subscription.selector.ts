import { createFeatureSelector } from '@ngrx/store';

export const cancelSubscriptionFeatureKey = 'cancelSubscription';

export interface CancelSubscriptionState {
  example: string;
}

export const initialCancelSubscriptionState: CancelSubscriptionState = {
  example: 'eksempel data',
};

export const selectCancelSubscriptionFeature = createFeatureSelector<CancelSubscriptionState>(cancelSubscriptionFeatureKey);
