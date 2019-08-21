import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

export interface RootState {

}

export const rootReducers: ActionReducerMap<RootState> = {

};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
