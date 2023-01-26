import "./App.css";
import Home from "./components/body/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./components/todo/Todo";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<div className="App">
							<Home />
						</div>
					}
				/>

				<Route exact path="/todo" element={<Todo />} />
			</Routes>
		</Router>
	);
}

export default App;
