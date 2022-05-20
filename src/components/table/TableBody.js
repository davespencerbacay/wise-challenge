import React from "react";
import { bigIntFormat } from "../../helpers/";
import TableError from "./TableError";
import TableLoading from "./TableLoading";

const TableBody = (props) => {
  const { error, loading, data, colSpan } = props;
  return (
    <tbody>
      {error && <TableError colSpan={colSpan} />}
      {loading && <TableLoading colSpan={colSpan} />}
      {data?.map((data) => {
        return (
          <tr className={`${data.active && "active-row"}`} key={data.id}>
            <td>{data.id}</td>
            <td>{data.startBlock}</td>
            <td>{data.endBlock}</td>
            <td>{bigIntFormat(data.signalledTokens)}</td>
            <td>{bigIntFormat(data.stakeDeposited)}</td>
            <td>{bigIntFormat(data.totalQueryFees)}</td>
            <td>{bigIntFormat(data.taxedQueryFees)}</td>
            <td>{bigIntFormat(data.totalRewards)}</td>
            <td>{bigIntFormat(data.totalIndexerRewards)}</td>
            <td>{bigIntFormat(data.totalDelegatorRewards)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
