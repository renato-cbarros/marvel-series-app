export interface Event {
  available: number;
  collectionURI: string;
  items: [{ name: string; resourceURI: string }];
  returned: number;
}
