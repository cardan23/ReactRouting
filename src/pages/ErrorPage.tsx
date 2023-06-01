import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const routeError = useRouteError();
    const message = isRouteErrorResponse(routeError) ? "The url is not valid" : "something failed";
  return (
    <div>
        <h2>Ooops...</h2>
        <p>{message}</p>
    </div>
  )
}

export default ErrorPage