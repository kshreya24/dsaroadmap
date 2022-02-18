import React from "react";
import './search.css';
const SearchBar = ({ searchQuery, setSearchQuery}) => ( 
    <>  
<form action="" method="get">
        <input className="input_box"
            value={searchQuery}            
            onInput={e => setSearchQuery(e.target.value)}            
            type="text"
            id="header-search"
            placeholder="Search your topic ..."
            title="s"
        />
    </form>
    </>

);

export default SearchBar;