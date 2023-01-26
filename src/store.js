import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./redux/reducers";

const reducer = combineReducers({
	todo: todoReducer,
});

const initialState = {
	todoItems: localStorage.getItem("todoItems")
		? JSON.parse(localStorage.getItem("todoItems"))
		: [],
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
