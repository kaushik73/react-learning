import React from "react";

class AboutUserClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        bio: "default",
        loginName: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kaushik73");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    const { name, bio, login, public_repos, location } = this.state.userInfo;
    return (
      <div style={{ fontSize: "20px" }}>
        <p>Name : {name}</p>
        <p>loginName: {login}</p>
        <p>bio: {bio}</p>
        <p>public_repos: {public_repos}</p>
        <p>location: {location}</p>
      </div>
    );
  }
}

export default AboutUserClass2;
