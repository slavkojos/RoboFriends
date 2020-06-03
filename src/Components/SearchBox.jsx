import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa3">
        <input className="tc pa3 ba br4 b--green bg-lightest-blue w5"
               type="search"
               placeholder="search robots"
               onChange={searchChange}
               
               />
               
        </div>
    )
}

export default SearchBox;