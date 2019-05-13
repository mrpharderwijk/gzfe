import { TrafficEvent } from './traffic-event.model';

export interface Traffic {
  radars: TrafficEvent;
  trafficJams: TrafficEvent;
  roadWorks: TrafficEvent;
}
