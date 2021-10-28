export interface Comic {
  available: number;
  collectionURI: string;
  items: [{ name: string; resourceURI: string }];
  returned: number;
}
