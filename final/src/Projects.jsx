import React from 'react';
import './fetchProjects';
import { useFetchProjects } from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);
  return <h2>projects</h2>;
};

export default Projects;
