import React from "react";
import "./ToDoList.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ToDoList extends React.Component {
	state = {
		listTodos: [
			{ id: "todo01", title: "Doing homework" },
			{ id: "todo02", title: "Reading book" },
			{ id: "todo03", title: "Do laundry" },
		],
		editTodo: {},
	};

	handleAddTodo = (item) => {
		this.setState({
			listTodos: [
				{
					id: Math.floor(Math.random() * 1001),
					title: item,
				},
				...this.state.listTodos,
			],
		});
	};

	handleDeleteTodo = (todo) => {
		this.setState({
			listTodos: this.state.listTodos.filter((item) => item.id !== todo.id),
		});
		toast.success("Todo deleted successfully! 🎉");
	};

	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state;
		let isEmptyObject = Object.keys(editTodo).length === 0;
		if (!isEmptyObject && todo.id === editTodo.id) {
			let listTodosCopy = [...listTodos];

			let editTodoIndex = listTodosCopy.findIndex((obj) => obj.id === editTodo.id);

			listTodosCopy[editTodoIndex].title = editTodo.title;

			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});

			toast.success("Todo updated successfully! 🎉");

			return;
		}
		this.setState({
			editTodo: todo,
		});
	};

	handleOnChangeEditTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = event.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};

	render() {
		let { listTodos, editTodo } = this.state;
		let isEmptyObject = Object.keys(editTodo).length === 0;

		return (
			<>
				<div className='list-todo-container'>
					<AddTodo handleAddTodo={this.handleAddTodo} />
					<div className='list-todo-content'>
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className='todo-child' key={item.id}>
										{isEmptyObject ? (
											<span>
												{index + 1} - {item.title} <></>
											</span>
										) : (
											<>
												{item.id === editTodo.id ? (
													<span>
														{index + 1} -{" "}
														<input
															onChange={(event) =>
																this.handleOnChangeEditTodo(event)
															}
															value={editTodo.title}
														/>
													</span>
												) : (
													<span>
														{index + 1} - {item.title} <></>
													</span>
												)}
											</>
										)}
										<button
											onClick={() => this.handleEditTodo(item)}
											className='btn-edit'
											type='button'>
											{!isEmptyObject && item.id === editTodo.id
												? "Save"
												: "Edit"}
										</button>
										<button
											onClick={() => this.handleDeleteTodo(item)}
											className='btn-delete'
											type='button'>
											Delete
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}

export default ToDoList;
