import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import generateTheme from "./Services/Generate-theme";
import {ThemeProvider} from "@mui/styles";
import Home from "./Layouts/Home/Home";
import Sidebar from "./Layouts/Sidebar";
import Footer from "./Layouts/Footer";
import AboutUsCreatePage from "./Pages/About-us/Create";
import './App.css';
import {Loader} from "./Components/Loader/1";
import AboutUsListPage from "./Pages/About-us/List";

const App = () => {
	const [loading, setLoading] = useState(true);
	const theme = generateTheme();

	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 500)
	}, []);
	return (
		loading ? <Loader theme={theme}/> : (
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Sidebar/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/create" element={<AboutUsCreatePage/>}/>
						<Route path="/list" element={<AboutUsListPage/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</ThemeProvider>
		)
	)
}

export default App;
