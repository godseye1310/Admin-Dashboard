// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { productInputs, userInputs } from "./constants/form-src";
import "./styles/dark.scss";
import useTheme from "./context/theme-context";

function App() {
	const { darkMode } = useTheme();
	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List title="users" />} />
							<Route path=":userId" element={<Single />} />
							<Route
								path="new"
								element={
									<New
										inputs={userInputs}
										title="Add New Users"
									/>
								}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List title="products" />} />
							<Route path=":productId" element={<Single />} />
							<Route
								path="new"
								element={
									<New
										inputs={productInputs}
										title="Add New Products"
									/>
								}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
