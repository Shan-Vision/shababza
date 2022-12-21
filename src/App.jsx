import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import SharedLayout from './sharedLayout/SharedLayout';
// import HomePage from './views/HomePage/HomePage';
// import ProjectDetails from './views/ProjectDetails/ProjectDetails';
// import Projects from './views/ProjectPage/Projects';

const Projects = lazy(() => import('./views/ProjectPage/Projects'));
const ProjectDetails = lazy(() =>
  import('./views/ProjectDetails/ProjectDetails')
);
const HomePage = lazy(() => import('./views/HomePage/HomePage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
