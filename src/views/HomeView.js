import React from 'react';
import Container from '../components/Container';

const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};


const HomeView = () => (
  <Container>
    <h1 style={styles.title}>
      Hello, this is your phonebook{' '}
      <span role="img" aria-label="Иконка приветствия">
        ☎
      </span>
    </h1>
  </Container>
);

export default HomeView;