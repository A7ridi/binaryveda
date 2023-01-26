import { GET_TODO } from "./actions";

// get todo reducer
export const todoReducer = (state = { getTodo: [] }, action) => {
	switch (action.type) {
		case GET_TODO:
			return {
				...state,
				getTodo: action.payload,
			};

		default:
			return state;
	}
};
