import React from "react";
import ChildComponent from "./ChildComponent";
import AdđComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "abcJob01", title: "Developer", salary: "10000" },
            { id: "abcJob02", title: "Tester", salary: "5000" },
            { id: "abcJob03", title: "Designer", salary: "7000" },
        ],
    };

    addNewJob = (job) => {
        console.log(">>> Check submit: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        });
    };
    render() {
        console.log(">>> Props: ", this.state);
        return (
            <>
                <AdđComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        );
    }
}

export default MyComponent;
