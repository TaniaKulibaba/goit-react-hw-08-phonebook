import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  btn: {
    marginRight: 20,
  },
  name: {
    fontWeight: 700,
    marginRight: 50,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="55" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <Button type="button" onClick={onLogout} style={styles.btn} variant="contained" color="secondary">Logout</Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);