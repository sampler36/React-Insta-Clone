import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar';
import PostContainer from './Components/PostContainer';
import CommentSection from './Components/CommentSection';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: dummyData
    };
  }
  
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBar />
        {this.state.data.map(post => (
            <PostContainer 
             post={post}
            />
         ) 
         
        )}
       
      
       
       <CommentSection />
      </div>
    );
  }
}

export default App;
