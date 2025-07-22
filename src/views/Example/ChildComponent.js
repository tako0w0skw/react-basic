import React from "react";

class ChildComponent extends React.Component {
    render() {
        console.log(">>> Props: ", this.props);

        let { name, age } = this.props;
        return (
            <>
                <div>
                    Child Component: {name} - {age}
                </div>
            </>
        );
    }
}

export default ChildComponent;
