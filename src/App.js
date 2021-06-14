import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import Appbar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <Appbar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted redirectTo="/" component={RegisterView} />
            <PublicRoute path="/login" restricted redirectTo="/" component={LoginView} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={PhonebookView} />
          </Switch>
        </Suspense>
      </Container>
    )
  }
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);