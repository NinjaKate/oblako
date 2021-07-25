import { Dictionary } from "./dictionary.model";
import { Event } from "./event.model";
import { Participant } from "./participant.model";

export interface GroupTraining {
  program: Dictionary;
  events: Array<Event>;
  conditionCode: string;
  participants: Array<Participant>;
  progress: number;
  id: number;
}
