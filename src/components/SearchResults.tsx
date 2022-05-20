import React from "react";

function SearchResults(props: {
  keyword: string;
  data: any;
  filterByKey: string;
}) {
    
  const data = props.data;
    console.log(props.filterByKey)
  const searchFilter = data.filter((item: any) => {
    if (typeof props.filterByKey === "string") {
      return item[props.filterByKey]
        .toLowerCase()
        .includes(props.keyword.toLowerCase());
    }

    return item.toLowerCase().includes(props.keyword.toLowerCase());
  });
  
  const listItems = !props.filterByKey ? searchFilter.map((val: any) => {
  return <li key={val}>{val}</li>
}) : searchFilter.map((val: any) => {
   return <li key={val.title}>{val.title}{val.author}</li>
  }) 

  return (
    <ul className="search-list">
      {props.keyword.length >= 3 && listItems.length > 0 ? listItems : listItems.length < 1 ? 'No Results' : 'Enter atleast 3 letters'}
    </ul>
  );
}

export default SearchResults;
