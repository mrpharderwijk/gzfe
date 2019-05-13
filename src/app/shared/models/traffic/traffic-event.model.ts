import { TrafficEventEntry } from './traffic-event-entry.model';

export interface TrafficEvent {
  total: number;
  roadEntries?: TrafficEventEntry[];
}
