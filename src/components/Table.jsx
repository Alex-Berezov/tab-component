import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTableItems } from "../redux/actions/table";

import Search from "./Search";
import DisplayOn from "./DisplayOn";
import UseSortableData from "./UseSortableData";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import Pagination from "./Pagination";
import "./table.scss";

const Table = (props) => {
  // Get table data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTableItems());
  }, []);
  let { tableItems, requestSort, sortConfig } = UseSortableData(
    props.tableItems
  );
  const getClassNameFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  //Search
  const [serchValue, setSearchValue] = useState('');
  const typedCharAtSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredTableItems = tableItems.filter(item => {
    if (
      item.name.toLowerCase().includes(serchValue.toLowerCase()) ||
      item.company.toLowerCase().includes(serchValue.toLowerCase()) ||
      item.country.toLowerCase().includes(serchValue.toLowerCase()) ||
      item.city.toLowerCase().includes(serchValue.toLowerCase())
    ) {
      return item;
    }
  });
  if (serchValue != '') {
    tableItems = filteredTableItems;
  }

  //Display on
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeOption = (event) => {
    setRowsPerPage(event.target.value);
  };

  // Get current table rows
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItems= currentPage * rowsPerPage;
  const indexOfFirstItems = indexOfLastItems - rowsPerPage;
  let currentRows = tableItems.slice(indexOfFirstItems, indexOfLastItems);
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <section className="table__block">
      <div className="table__header">
        <Search typedCharAtSearchInput={typedCharAtSearchInput} />
        <DisplayOn rowsPerPage={rowsPerPage} handleChangeOption={handleChangeOption} />
      </div>
      <table>
        <TableHeader requestSort={requestSort} getClassNameFor={getClassNameFor} />
        <TableRows currentRows={currentRows} />
      </table>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={tableItems.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Table;
