import React, { Component } from "react";
import { userContext } from '../../../context/userContext';
import { Button, TextField } from '@mui/material';

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

    event.target.reset();

/*     event.target.user.value = '';
    event.target.avatar.value = ''; */

    this.context.login(user, avatar);
  }


  render() {
    return (
      <div className='center'>
        <h1>Home</h1>
        <form onSubmit={this.login}>
          <TextField id="user" label="Nombre" variant="outlined" size="small" />
          <TextField id="avatar" label="Imagen" variant="outlined" size="small" /><br/>
          <Button variant="outlined" size="small" type="submit">Login</Button>

          {/*     <label htmlFor="user">Nombre de usuario:
            <input type='text' id='user' name='user' /></label><br />
          <label htmlFor="avatar">Imagen:
            <input type='text' id='avatar' name='avatar' /></label>
          <button type="submit">Login</button> */}
        </form>
      </div>
    );
  }
}

export default Home;
