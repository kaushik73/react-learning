import React from "react";
import AboutUserClass from "./AboutUserClass";
import AboutUserClass2 from "./AboutUserClass2";
// ep -8 : 1:35
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent const.");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        This is an About Functional Component
        <AboutUserClass name={"first"} location={"bundi"} />
        <br></br>
        <hr />
        <br></br>
        <AboutUserClass2 />
      </div>
    );
  }
}

export default About;

// OUTPUT :
// parent const.
// parent render
//  first child const.
//  first child render

//  second child const.
//  second child render

//  first child componentDidMount
//  second child componentDidMount
//  parent componentDidMount
