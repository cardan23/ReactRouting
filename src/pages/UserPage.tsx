import { Outlet } from "react-router-dom"
import { UserList } from "./UserList"

const UserPage = () => {
  return (
    <div className="row">
        <div className="col">
            <UserList/>
        </div>
        <div className="col">
            {/* This "Outlet" component its important because is where we are going to show the nested component route */}
            <Outlet/>
        </div>
    </div>
  )
}

export default UserPage