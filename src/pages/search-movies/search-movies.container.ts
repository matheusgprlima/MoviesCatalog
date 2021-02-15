import { connect } from "react-redux";
import { SearchMovies } from "./search-movies.page";
import { searchMovies } from "../../store/ducks/movie/movieAction";
import { bindActionCreators } from "redux";
import { MovieState } from "../../type";
const mapStateToProps = (state: MovieState) => {
  return { movies: state.movie };
};
const mapDispachToProps = (dispatch: any) => {
  bindActionCreators({ searchMovies }, dispatch);
};
export default connect(mapStateToProps, mapDispachToProps)(SearchMovies);
