export interface IPokemon {
  name: string;

  // Optional (detail)
  height?: number;
  id?: number;
  moves?: string[];
  order?: number;
  types?: string[];
  weight?: number;
}

export interface IPokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

// Todo: specify type based on API response
export interface IPokemonDetailResponse {
  [key: string]: any;
}
