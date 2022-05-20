import React from "react";

const TableLoading = (props) => {
  return (
    <tr>
      <td colSpan={props.colSpan}>Loading ...</td>
    </tr>
  );
};

export default TableLoading;
