import { createTheme, Divider, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import Sidebar from "./layout/Sidebar";

function App() {

	const [mode/* , setMode */] = useState("light")

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		}
	})

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="frame">
				{/* sidebar */}
				<Sidebar />
				{/* vert divider */}
				<Divider orientation="vertical" flexItem />
				{/* main */}
				<Main />
			</div>
		</ThemeProvider>
	);
}

export default App;
