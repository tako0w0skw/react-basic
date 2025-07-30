const getRandomColor = () => {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const Color = (WrappedComponent) => {
	let color = getRandomColor();
	return (props) => (
		<div style={{ color: color }}>
			<WrappedComponent {...props} />
		</div>
	);
};

export default Color;
