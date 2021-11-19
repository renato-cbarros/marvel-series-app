export interface Storie {
  available: number;
  collectionURI: string;
  items: { resourceURI: string; name: string; type: string }[] | [];
  returned: number;
}
