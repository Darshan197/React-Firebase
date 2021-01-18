import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import Register from '../views/Register'
import Welcome from '../views/Welcome'
import Navbar from './Navbar'

function RouteInterceptor({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function MyRouter(props) {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Welcome} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    <RouteInterceptor path="/dashboard" isAuthenticated={props.token}>
                        <Dashboard />
                    </RouteInterceptor>
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

export default connect(mapStateToProps)(MyRouter)
