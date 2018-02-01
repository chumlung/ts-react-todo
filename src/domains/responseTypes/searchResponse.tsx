import { SingleItem } from './fetchResponse';

interface PageMetadata {
  page: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
}

export interface SearchResponse {
  data: {
    data: SingleItem[];
    metadata: PageMetadata
  };
}