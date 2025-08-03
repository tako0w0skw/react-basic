const initState = {
	users: [
		{ id: "01", name: "Hue Nhu" },
		{ id: "02", name: "Trong Thang" },
	],
	post: [],
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "DELETE_USER":
			console.log(">>> run into delete user: ", action);

			let users = state.users;
			users = users.filter((item) => item.id !== action.payload.id);

			console.log(">>> list after delete: ", users);

			return {
				...state,
				users,
			};

		case "ADD_USER":
			console.log("add user from redux");
			let id = Math.floor(Math.random() * 1000001);
			let newUser = { id: id, name: `random - ${id}` };
			return {
				...state,
				users: [...state.users, newUser],
			};

		default:
			return state;
	}
};

export default rootReducer;
