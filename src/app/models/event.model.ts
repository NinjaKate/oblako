import { Dictionary } from "./dictionary.model";

export interface Event {
  name: string;
  date: Date;
  trainer: Dictionary;
}
