import React from "react";
import "./SearchBar.css";

    class SearchBar extends React.Component{
        render(){
            return (
               <nav className="Nav">
                 <div className="Nav-menus">
                   <div className="Nav-brand">
                     <a className="Nav-brand-logo" href="/">
                     </a>
                     <input className="nav-enterior" type="text" placeholder=" Search"></input>
                     <a className="Nav-brand" href="/">
                     </a>
                      <div className="icons">
                       <i className="far fa-compass fa-lg"></i>
                      </div>
                      <div className="icons">             
                      <i className="far fa-heart fa-lg"></i> 
                      </div>
                      <div className="icons">
                       <i className="far fa-user fa-lg"></i>
              
                      </div>
                   
                   </div>
                 </div>
               </nav>

           );
        }   
    }
    export default SearchBar;