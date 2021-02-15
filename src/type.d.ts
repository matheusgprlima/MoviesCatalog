import { AxiosRequestConfig } from "axios";

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}
export type MovieState = {
<<<<<<< HEAD
=======
  status?: status;
>>>>>>> feature/pages-redesign
  movie: IMovie[];
};
export type MovieAction = {
  type: string;
<<<<<<< HEAD
  payload: any;
};

=======
  payload: { searchTerm: string; year: string };
};

export type status = {
  loading: string;
  success: string;
  fail: string;
};
>>>>>>> feature/pages-redesign
type DispachType = (action: MovieAction) => void;
