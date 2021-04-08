import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Leaves from './components/Leaves';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/leaves' component={Leaves} />
    <Redirect to='/' />
  </Switch>
)

export default Routes;
