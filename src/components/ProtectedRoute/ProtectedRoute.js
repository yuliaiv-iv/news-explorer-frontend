  import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useUser } from '../../hooks/useUser';

const ProtectedRoute = ({ ...props  }) => {

  const { user } = useUser();
  const isLogged = !!user;

  const Log = () => {
    console.log('data')
  }

  return (
    <Route>
      {
        () => isLogged ? <Route {...props} /> : <Redirect to='/' />
      }
    </Route>
)}

export default ProtectedRoute;