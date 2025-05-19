import '../css/Search.css';
import {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import movieList from './MovieList';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }   // ← ★ 여기까지만 닫아야 합니다. 추가 중괄호 삭제

  componentDidMount() {
    console.log('componentDidMount');
    console.log(window.location.href);        // 예시로 하나만 남겨도 됨

    const queryObj = queryString.parse(window.location.search);
    const queryTerm = queryObj.query_term;
    this.searchMovie(queryTerm);
  }

  searchMovie = async (queryTerm) => {
    try {
      const res = await axios.get(
        // http:// 와 https:// 가 중복돼 있었으므로 https:// 만 남김
        `https://yts.mx/api/v2/list_movies.json?query_term=${queryTerm}`
      );
      this.setState({ movieList: res.data.data.movies });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div id="search">
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default Search;
