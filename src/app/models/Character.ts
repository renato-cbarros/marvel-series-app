export interface Character {
  available: number;
  collectionURI: string;
  items: { name: string; resourceURI: string }[] | [];
  returned: number;
}
