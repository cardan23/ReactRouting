import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Menu
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <NavLink to={"/"} className="nav-link">Home</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to={"/users"} className="nav-link">Users</NavLink>
          </li>
          <li className='nav-item'>
          <NavLink to={"/contact"} className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
