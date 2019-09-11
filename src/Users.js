import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ id: 1, name: "Nanda" }, { id: 2, name: "Kishore" }]
    };

    // bind in constructor
    //this.deleteUser = this.deleteUser.bind(this); // act like C#
  }

  // Class field with an arrow function
  deleteUser = userId => {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users: users });
    debugger;
  };

  renderUsers = user => {
    return (
      <li>
        <button onClick={() => this.deleteUser(user.id)}>Delete</button>
        {user.name}
      </li>
    );
  };

  //The JSX we returned here will be rendered.
  render() {
    return (
      <>
        <h1>Users</h1>
        <ul>{this.state.users.map(this.renderUsers)}</ul>
      </>
    );
  }
}

export default Users;
