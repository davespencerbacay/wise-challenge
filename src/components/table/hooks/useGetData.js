import { useState, useEffect } from "react";
import { searchString } from "../../../helpers";

export const useGetData = (data) => {
  const [tableData, setTableData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSorting] = useState({ field: "", order: "" });

  useEffect(() => {
    if (search) {
      let epoches = data?.epoches;
      const filteredData = epoches.filter(
        (epoch) =>
          searchString(epoch.startBlock, search) ||
          searchString(epoch.endBlock, search) ||
          searchString(epoch.id, search)
      );
      setTableData(filteredData);
    } else {
      setTableData(data?.epoches);
    }

    if (sort.field) {
      let epoches = data?.epoches;
      console.log(sort);
      const sortedDataDesc = epoches
        ?.slice()
        .sort((a, b) => b[sort.field] - a[sort.field]);
      const sortedDataAsc = epoches
        ?.slice()
        .sort((a, b) => a[sort.field] - b[sort.field]);
      setTableData(sort.order === "asc" ? sortedDataDesc : sortedDataAsc);
    }
  }, [data, search, sort]);

  return { tableData, setSearch, setSorting };
};
