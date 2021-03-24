import React, {useState, useMemo} from 'react';
import {useSelector} from "react-redux";

const UseSortableData = () => {

    const tableItems = useSelector(({ tableReducer }) => tableReducer.tableItems);

    const [sortConfig, setSortConfig] = useState(null);

    const sortedItems = useMemo(() => {
        let sortableItems = [...tableItems];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [tableItems, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { tableItems: sortedItems, requestSort, sortConfig };
};

export default UseSortableData;