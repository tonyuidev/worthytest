import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

function SearchWidget(props: any) {
  const [input, setInput] = useState("");

  const updateInput = (val: string) => {
      setInput(val)
  }
  return (
    <div className="search-widget">
      <SearchInput updateInput={updateInput}/>
      <SearchResults keyword={input} data={props.data} filterByKey={props.filterByKey || false}/>
    </div>
  );
}

export default SearchWidget;
