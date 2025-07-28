import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
	state = {
		title: "",
	};

	addTodo = (item) => {
		if (!item) {
			toast.error("Please enter a todo item!");
			return;
		}

		this.props.addTodo(item);
		toast.success("Todo added successfully! 🎉");

		this.setState({
			title: "",
		});
	};

	handleOnChangeTitle = (event) => {
		this.setState({
			title: event.target.value,
		});
	};
	render() {
		let { title } = this.state;
		return (
			<div className='add-todo'>
				<input
					onChange={(event) => this.handleOnChangeTitle(event)}
					type='text'
					value={this.state.title}
				/>
				<button onClick={() => this.addTodo(title)} className='btn-add' type='button'>
					Add
				</button>
			</div>
		);
	}
}

export default AddTodo;
