import { connect } from "react-redux";
import { SearchMovies } from "./search-movies.page";
import { searchMovies } from "../../store/ducks/movie/movieAction";
import { bindActionCreators } from "redux";
import { MoviesState } from "../../type";
const mapStateToProps = (state: MoviesState) => {
  return { movies: state.movies };
};
const mapDispachToProps = (dispatch: any) =>
  bindActionCreators({ searchMovies }, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(SearchMovies);
