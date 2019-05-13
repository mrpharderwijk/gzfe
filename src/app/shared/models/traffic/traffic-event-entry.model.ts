import { AnwbEvent } from './anwb/anwb-event.model';

export interface TrafficEventEntry {
  road: string;
  roadType: string;
  trafficJams?: AnwbEvent[];
  radars?: AnwbEvent[];
  roadWorks?: AnwbEvent[];
}
