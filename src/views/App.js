import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent";
import ToDoList from "./Todos/ToDoList";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MyComponent from "./Example/MyComponent";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='App'>
					<header className='App-header'>
						<Nav />
						<img src={logo} className='App-logo' alt='logo' />

						<Switch>
							<Route path='/' exact>
								<Home />
							</Route>
							<Route path='/todos'>
								<ToDoList />
							</Route>
							<Route path='/about'>
								<MyComponent />
							</Route>
						</Switch>
					</header>
				</div>
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
			</BrowserRouter>
		</>
	);
}

export default App;
