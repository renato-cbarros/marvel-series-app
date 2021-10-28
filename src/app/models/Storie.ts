export interface Storie {
  available: number;
  collectionURI: string;
  items: [{ name: string; resourceURI: string; type: string }];
  returned: number;
}
