import React from 'react'
import { useRouteError ,NavLink} from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops! an error occured.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"> <button>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
