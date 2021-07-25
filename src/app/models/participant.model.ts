import { Dictionary } from "./dictionary.model";

export interface Participant {
  group: Dictionary;
  status: Dictionary;
  experience: Dictionary;
  subdivision: Dictionary;
  area: Dictionary;
  city: Dictionary;
  name: string;
  id: number;
}
