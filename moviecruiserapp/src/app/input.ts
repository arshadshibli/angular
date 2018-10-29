import { IMovieIn } from "./moviein";

export interface Input {
    Search: Array<IMovieIn>;
    totalResults: string;
    Response: string;
}