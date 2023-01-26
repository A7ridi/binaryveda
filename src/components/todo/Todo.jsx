import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Arrow from "../../images/arrow.png";
import Dots from "../../images/dots.png";
import { getTodoLists } from "../../redux/actions";
import "./todo.css";

const Todo = () => {
	const [addTodo, setAddTodo] = useState("");
	const { getTodo } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	const submitHandler = (event) => {
		if (event.key === "Enter" && addTodo.length > 0) {
			event.preventDefault();
			const todoList = {
				id: Math.random(),
				task: addTodo,
			};
			let lists = [];
			let getList = JSON.parse(localStorage.getItem("todoItems") || "[]");
			lists = [...getList];
			lists.push(todoList);
			localStorage.setItem("todoItems", JSON.stringify(lists));
			window.location.reload(false);
		}
	};

	useEffect(() => {
		dispatch(getTodoLists());
	}, [addTodo]);

	return (
		<div className="todo-container">
			<div className="todo-box">
				<div className="todo-header">
					<div>
						<span>Today</span>
						<img src={Arrow} alt="arrow" width={20} />
					</div>

					<img src={Dots} alt="dots" width={20} />
				</div>

				<div className="todo-checkbox">
					{getTodo?.map((item) => {
						return (
							<div className="form-check" key={item.id}>
								<input
									className="form-check-input"
									type="checkbox"
									value={item.id}
									id={`flexCheckDefault-${item.id}`}
								/>
								<label
									className={`form-check-label strikethrough`}
									htmlFor={`flexCheckDefault-${item.id}`}
								>
									{item.task}
								</label>
							</div>
						);
					})}

					<div className="add-input">
						<input
							type="text"
							placeholder="Enter New Todo"
							className="add-todo"
							value={addTodo}
							onChange={(e) => setAddTodo(e.target.value)}
							onKeyDown={submitHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Todo;
