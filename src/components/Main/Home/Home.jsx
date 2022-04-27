import React, { Component } from "react";
import { userContext } from '../../../context/userContext';

class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      avatar: ''
    }
  }


  login = (event) => {
    event.preventDefault();

    const user = event.target.user.value;
    const avatar = event.target.avatar.value;

    this.setState(
      {
        user: user,
        avatar: avatar
      }
    );

    event.target.user.value = '';
    event.target.avatar.value = '';

    this.context.login(user, avatar);
  }


  render() {
    return (
      <div>
        <h1>Contacto</h1>
        <form onSubmit={this.login}>
          <label htmlFor="user">Nombre de usuario:
            <input type='text' id='user' name='user' /></label><br />
          <label htmlFor="avatar">Imagen:
            <input type='text' id='avatar' name='avatar' /></label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Home;
