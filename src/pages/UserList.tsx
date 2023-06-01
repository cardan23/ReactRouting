import { Link } from "react-router-dom";

export const UserList = () => {
  const users = [
    { name: "Daniel", id: 1 },
    { name: "Jess", id: 2 },
    { name: "Petter", id: 3 },
  ];

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>
            {/* Link is a component from "react-router-dom" wich help us to manage every link, its better thant <a href=""> element */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
