export interface IGenerations {
  name: string;

  // Optional (detail)
  height?: number;
  id?: number;
  moves?: string[];
  order?: number;
  types?: string[];
  weight?: number;
  sprite?: string;
}

export interface IGenerationsListResponse {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

// Todo: specify type based on API response
export interface IGenerationDetailResponse {
  [key: string]: any;
}
