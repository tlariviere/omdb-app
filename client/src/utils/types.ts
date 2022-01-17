export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface SearchEntry {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface Search {
  Search: SearchEntry[];
  totalResults: string;
}
