import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact me</NavLink>
    </nav>
  );
};

export default Navigation;
