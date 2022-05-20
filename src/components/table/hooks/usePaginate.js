import { useState } from "react";

export const usePaginate = (tableData) => {
  const epochPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastEpoch = currentPage * epochPerPage;
  const indexOfFirstEpoch = indexOfLastEpoch - epochPerPage;
  const currentEpoches = tableData?.slice(indexOfFirstEpoch, indexOfLastEpoch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentEpoches,
    paginate,
    epochPerPage,
    currentPage,
    setCurrentPage,
  };
};
