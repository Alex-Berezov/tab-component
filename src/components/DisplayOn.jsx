import React from 'react';

const DisplayOn = ({rowsPerPage, handleChangeOption}) => {
    return (
        <div className="table__header_select">
          <p>Display on: </p>
          <select value={rowsPerPage} onChange={handleChangeOption} name="rows">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
    );
}

export default DisplayOn;