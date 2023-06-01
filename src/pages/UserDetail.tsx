import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const UserDetail = () => {
  //hooks from react-router-dom
  //useParams -> we can ge all parameters we receive on this components
  const parameters = useParams();
  console.log(parameters);

  //withthis hook we can get and update our query string parameters
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  //get method help us to retrieve the value of the parameter
  console.log(searchParams.get("name"));

  const location = useLocation();
  console.log(location)

  return <div>User {parameters.id}</div>;
};
