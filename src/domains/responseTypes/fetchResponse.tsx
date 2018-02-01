export interface SingleItem {
  id: number;
  userId: number;
  details: string;
  date: string;
  tags: string[];
}

export interface FetchResponse {
  data: {
    data: SingleItem[];
  };
}