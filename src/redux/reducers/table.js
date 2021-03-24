import {SET_TABLE_ITEMS} from '../actions/table';

let initialState = {
    tableItemsCols: [],
    tableItems: []
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_ITEMS: {
            return {
                ...state,
                tableItems: action.payload
            };
        }
        default:
            return state;
    }
};

export default tableReducer;