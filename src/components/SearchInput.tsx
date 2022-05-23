import React from "react";

function SearchInput(props: any) {
  const searchTrigger = (e: { target: { value: string } }) => {
    const val = e.target.value;
    props.updateInput(val);
  };

  return (
    <div className="input-wrapper">
      <input type="text" onChange={searchTrigger} autoFocus={props.focus}/>
    </div>
  );
}

export default SearchInput;
