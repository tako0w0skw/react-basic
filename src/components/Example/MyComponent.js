import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Tako",
        age: 22,
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleOnClickButton = () => {
        console.log("Clicked!");
        alert("Yay!! You clicked 🥳");
    };
    render = () => {
        return (
            <>
                <div className="first">Hello World with MyComponent! My name is {this.state.name}</div>
                <div className="second">
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} /> I
                    am {this.state.age} years old.
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClickButton()}>Click me</button>
                </div>
            </>
        );
    };
}

export default MyComponent;
