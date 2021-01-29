  import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLogged, ...props  }) => {

  return (
    <Route>
      {
        () => isLogged ? <Route {...props} /> : <Redirect to='/' />
      }
    </Route>
)}

export default ProtectedRoute;