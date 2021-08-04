import { Thread } from './thread';

export interface Search {
  count: number;
  nextPage: null;
  threads: Array<Thread>;
}
