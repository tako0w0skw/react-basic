import logo from "./logo.svg";
import "./App.scss";
import ToDoList from "./Todos/ToDoList";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyComponent from "./Example/MyComponent";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<header className='App-header'>
					<Nav />
					<img src={logo} className='App-logo' alt='logo' />
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/todo'>
							<ToDoList />
						</Route>
						<Route path='/about'>
							<MyComponent />
						</Route>
						<Route path='/user' exact>
							<ListUser />
						</Route>
						<Route path='/user/:id'>
							<DetailUser />
						</Route>
					</Switch>
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
		</BrowserRouter>
	);
}

export default App;
