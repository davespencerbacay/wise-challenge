import React from "react";
import { Table as ReactTable } from "react-bootstrap";
import TablePagination from "./TablePagination";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableSearch from "./TableSearch";
import { LOAD_EPOCH } from "../../apollo/queries";
import { useQuery } from "@apollo/client";
import { usePaginate } from "./hooks/usePaginate";
import { useGetData } from "./hooks/useGetData";

const tableHeader = [
  { name: "ID", field: "id", sortable: true },
  { name: "Start Block", field: "startBlock", sortable: true },
  { name: "End Block", field: "endBlock", sortable: true },
  { name: "Signalled Tokens", field: "signalledTokens", sortable: true },
  { name: "Stake Deposited", field: "stakeDeposited", sortable: true },
  { name: "Total Query Fees", field: "totalQueryFees", sortable: true },
  { name: "Taxed Query Fees", field: "taxedQueryFees", sortable: true },
  { name: "Total Rewards", field: "totalRewards", sortable: true },
  {
    name: "Total Indexer Rewards",
    field: "totalIndexerRewards",
    sortable: true,
  },
  {
    name: "Total Delegator Rewards",
    field: "totalDelegatorRewards",
    sortable: true,
  },
];

const Table = () => {
  const { error, loading, data } = useQuery(LOAD_EPOCH);

  // custom hook for getting the data search filter, and sort.
  const { tableData, setSearch, setSorting } = useGetData(data);

  // custom hook for pagination
  const {
    currentEpoches,
    paginate,
    epochPerPage,
    currentPage,
    setCurrentPage,
  } = usePaginate(tableData);

  return (
    <div className="table-container">
      <TableSearch
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <ReactTable responsive className={!loading && "hasScroll"}>
        <TableHead
          tableHeader={tableHeader}
          onSort={(field, order) => setSorting({ field, order })}
        />
        <TableBody
          error={error}
          loading={loading}
          data={currentEpoches}
          colSpan={tableHeader.length}
        />
      </ReactTable>
      <TablePagination
        epochPerPage={epochPerPage}
        totalEpoches={tableData?.length}
        paginate={{ handler: paginate, page: currentPage }}
      />
    </div>
  );
};

export default Table;
