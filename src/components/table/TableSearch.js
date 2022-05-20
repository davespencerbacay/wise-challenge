import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Search = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <Form.Control
        type="text"
        placeholder="Search Start Block or End Block"
        value={search}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
