import { connect } from "react-redux";
import { MoviesState } from "../../type";
import { DetailMovies } from "./movie-details.page";
const mapStateToProps = (state: MoviesState, ownProps: any) => {
  const movie = state.movies.find(
    (movie) => movie.imdbID === ownProps.match.params.id
  );
  return { movie };
};

export default connect(mapStateToProps, null)(DetailMovies);
