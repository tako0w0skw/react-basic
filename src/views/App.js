import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent";
import ToDoList from "./Todos/ToDoList";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Tako's To Do List</p>
				<ToDoList />
			</header>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Bounce}
			/>
		</div>
	);
}

export default App;
