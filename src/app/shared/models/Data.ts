import { Serie } from './Serie';

export interface Data {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  etag: string;
  status: string;
  data: {
    count: number;
    limit: number;
    offset: number;
    results: Serie[];
    total: number;
  };
}
