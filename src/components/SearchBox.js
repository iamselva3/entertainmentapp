import React from "react";

const SearchBox=(props)=>{
    <div className="col col-sm-4">
        <input className="form-control"
        value={props.value}
        onChange={(event)=>props.setSearchValue(event.targer.value)}
         placeholder="Type to search..."
         ></input>
    </div>
}

export default SearchBox;