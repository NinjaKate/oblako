import { Dictionary } from "./dictionary.model";

export interface Event {
  name: string;
  date: Date;
  timeHours: number;
  timeMinutes: number;
  trainer: Dictionary;
}
