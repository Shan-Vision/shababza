import { useParams } from 'react-router-dom';
import Project1 from '../../projects/project1/Project1';
import Project2 from '../../projects/project2/Project2';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <>
      {projectId === String(1) && <Project1 />}
      {projectId === String(2) && <Project2 />}
    </>
  );
};

export default ProjectDetails;
