import React from "react";

const TableError = (props) => {
  return (
    <tr>
      <td colSpan={props.colSpan}>
        {props.message ? props.message : "Error Occured"}
      </td>
    </tr>
  );
};

export default TableError;
