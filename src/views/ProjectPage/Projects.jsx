import { NavLink, useLocation } from 'react-router-dom';
import { projects } from '../../projects';

const Projects = () => {
  const location = useLocation();
  return (
    <>
      <h1>
        50 Projects <br /> For React & the Static Web
      </h1>

      {projects.map(({ id, title }) => {
        return (
          <NavLink to={`${id}`} state={{ from: location }} key={id}>
            {title}
          </NavLink>
        );
      })}
    </>
  );
};

export default Projects;
