export interface Creator {
  available: number;
  collectionURI: string;
  items: [{ name: string; resourceURI: string; role: string }];
  returned: number;
}
