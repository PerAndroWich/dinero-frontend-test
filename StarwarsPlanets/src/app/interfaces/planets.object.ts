import { Planet } from './planet.object';
export interface Planets {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}
