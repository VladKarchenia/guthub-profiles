import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const initialState = {
    searchValue: "",
};

const searchValue = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_SEARCH_VALUE":
            return { ...state, searchValue: payload };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    routing: routerReducer,
    searchValue,
});
