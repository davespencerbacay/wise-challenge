import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TableHead = (props) => {
  const { tableHeader, onSort } = props;

  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const onSortingChange = (field) => {
    const order =
      field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
    setSortingField(field);
    setSortingOrder(order);
    onSort(field, order);
  };
  return (
    <thead>
      <tr>
        {tableHeader.map(({ name, field, sortable }, index) => {
          return (
            <th
              key={index}
              onClick={() => (sortable ? onSortingChange(field) : null)}
            >
              {name} &nbsp;
              {sortable && sortingField === field && (
                <span className="icon">
                  <FontAwesomeIcon
                    icon={sortingOrder === "asc" ? faArrowDown : faArrowUp}
                  />
                </span>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
