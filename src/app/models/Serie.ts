import { Character } from './Character';
import { Comic } from './Comic';
import { Creator } from './Creator';
import { Storie } from './Storie';

export interface Serie {
  characters: Character;
  comics: Comic;
  creators: Creator;
  description: string;
  endYear: number;
  events: Event;
  id: number;
  modified: string;
  next: string;
  previous: string;
  rating: string;
  resourceURI: string;
  startYear: number;
  stories: Storie;
  thumbnail: { extension: string; path: string };
  title: string;
  type: string;
  urls: [{ type: string; url: string }];
}
