import React from "react";
import ChildComponent from "./ChildComponent";
import AdđComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "abcJob01", title: "Developer", salary: "10000$" },
            { id: "abcJob02", title: "Tester", salary: "5000$" },
            { id: "abcJob03", title: "Designer", salary: "7000$" },
        ],
    };
    render() {
        console.log(">>> Props: ", this.state);
        return (
            <>
                <AdđComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}

export default MyComponent;
