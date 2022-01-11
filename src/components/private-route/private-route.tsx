import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { APPRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors';

function PrivateRoute(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? <Outlet /> : <Navigate to={APPRoute.Login} />;
}

export default PrivateRoute;

