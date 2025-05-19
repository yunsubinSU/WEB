import {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import Home from './components/Home';
import Search from './components/Search';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div className='App'>
        <BrowserRouter>
          <SearchHeader/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;