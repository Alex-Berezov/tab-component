import React from 'react';

const TableHeader = ({requestSort, getClassNameFor}) => {
    return (
        <thead>
          <tr>
            <th
              onClick={() => requestSort("name")}
              className={getClassNameFor("name")}
            >
              Name
            </th>
            <th
              onClick={() => requestSort("company")}
              className={getClassNameFor("company")}
            >
              Company
            </th>
            <th
              onClick={() => requestSort("country")}
              className={getClassNameFor("country")}
            >
              Country
            </th>
            <th
              onClick={() => requestSort("city")}
              className={getClassNameFor("city")}
            >
              City
            </th>
          </tr>
        </thead>
    );
}

export default TableHeader;