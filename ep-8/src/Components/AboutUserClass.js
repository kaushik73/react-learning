import React from "react";

class AboutUserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child const.");

    this.d = new Date();
    this.state = {
      count: 0,
    };
  }
  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
  }
  render() {
    console.log(this.props.name + "child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div style={{ fontSize: "20px" }}>
        <p>Count : {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
        <p>Name : {name}</p>
        <p>Location: {location}</p>
        <p>Date: {this.d.getFullYear() + " " + this.d.getMonth()}</p>
      </div>
    );
  }
}

export default AboutUserClass;
