import "./App.css";
import Main from "./layout/Main";
import Sidebar from "./layout/Sidebar";

function App() {
	return (
		<div className="frame">
			{/* sidebar */}
			<Sidebar />
			{/* main */}
			<Main />
		</div>
	);
}

export default App;
