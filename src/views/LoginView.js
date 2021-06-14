import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '../components/Container';
import { Button } from '@material-ui/core';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };


  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  
    this.props.onLogin(this.state);
  
    this.setState({ name: '', email: '', password: '' });
  };
    
  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <h1 className="Title">Login</h1>

        <form className="Login"
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>


          <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
      </Container>
    );
  }
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}


export default connect(null, mapDispatchToProps)(LoginView);