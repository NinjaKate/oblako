import { Dictionary } from "./dictionary.model";
import { Event } from "./event.model";
import { Participant } from "./participant.model";

export interface IndividualTraining {
  program: Dictionary;
  events: Array<Event>;
  conditionCode: string;
  participants: Participant;
  progress: number;
  id: number;
}
