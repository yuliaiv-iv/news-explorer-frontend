import React, { useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useUser } from '../../hooks/useUser';

const ProtectedRoute = ({ ...props }) => {

  const { user } = useUser();
  const isLogged = !!user;

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      props.onLogin(true);
    }
  }, [props]);

  return (
    <Route>
      {
        () => isLogged ? <Route {...props} /> : <Redirect to='/' />
      }
    </Route>
  )
}

export default ProtectedRoute;