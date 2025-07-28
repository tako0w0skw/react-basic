import React from "react";
import "./ToDoList.scss";
import AddTodo from "./AddTodo";

class ToDoList extends React.Component {
	state = {
		listTodos: [
			{ id: "todo01", title: "Doing homework" },
			{ id: "todo02", title: "Reading book" },
			{ id: "todo03", title: "Do laundry" },
		],
	};

	addTodo = (item) => {
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
	render() {
		let { listTodos } = this.state;
		return (
			<>
				<div className='list-todo-container'>
					<AddTodo addTodo={this.addTodo} />
					<div className='list-todo-content'>
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className='todo-child' key={item.id}>
										<span>
											{index + 1} - {item.title} <></>
										</span>
										<button className='btn-edit' type='button'>
											Edit
										</button>
										<button className='btn-delete' type='button'>
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
