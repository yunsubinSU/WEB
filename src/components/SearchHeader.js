import '../css/SearchHeader.css';
import {Component} from 'react';

class SearchHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:''
        };
    }
    handleInput=(e)=>{
        this.setState({searchText:e.target.value})
    }
    searchMovie=()=>{
        alert('영화 검색!')
        const {searchText} = this.state;
        window.location.href=`/search?query_term=${searchText}&page=1&limit=15`;
    }

    render(){
        return (
            <div id='search-header'>
                <input type='text' onChange={this.handleInput}/>
                <button onClick={()=>this.searchMovie()}>검색</button>
            </div>
        );
    }
}

export default SearchHeader;