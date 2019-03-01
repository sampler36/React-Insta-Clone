import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostsContainer/PostContainer';



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

      <div>
         <SearchBar />
      </div>

        {this.state.data.map(post => (
            <PostContainer 
             post={post}
            />
         ) 
         
        )}
       
   
      </div>
    );
  }
}

export default App;
