import { Link  } from "react-router-dom"

export const HomePage = () => {

  throw("we are sending this error to test");


  return (
      <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat amet velit ducimus delectus ex alias. Velit officia dolor neque mollitia.</p>
          <Link to={"/users"}>Users</Link>
    </div>
  )
}
