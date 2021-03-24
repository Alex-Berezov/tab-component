import axios from "axios";

export const SET_TABLE_ITEMS = 'SET_TABLE_ITEMS';

export const fetchTableItems = () => (dispatch) => {
    axios.get(`/items`).then(({data}) => {
        dispatch(setTableItems(data));
    });
};

export const setTableItems = (tableItems) => ({
    type: SET_TABLE_ITEMS,
    payload: tableItems
});