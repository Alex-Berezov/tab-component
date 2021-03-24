import React from 'react';

const TableRows = ({currentRows}) => {
    return (
        <tbody>
          {currentRows&&
            currentRows.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.company}</td>
                  <td>{row.country}</td>
                  <td>{row.city}</td>
                </tr>
              );
            })}
        </tbody>
    );
}

export default TableRows;