export const GET_TODO = "GET_TODO";

// get todo lists
export const getTodoLists = () => async (dispatch, getState) => {
	let lists = JSON.parse(localStorage.getItem("todoItems"));
	dispatch({
		type: GET_TODO,
		payload: lists,
	});
};
