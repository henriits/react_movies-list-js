import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      // <li key={movie.id}>{movie.title}</li>

      <MovieCard key={movie.imbdId} movie={movie} />
    ))}
  </ul>
);
