import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

import Featured from '../components/Featured';
import Archive from '../components/Archive';
import Inception from "../assets/videoes/1.png"

const technologies1 = [
  "Docker",
  "Docker_Compose",
  "Dockerfiles",
  "Volumes",
  "Networking"
]

function Projects() {
  return (
      <StyledProjects id="projects">
        <Header><span>02.</span> PROJECTS</Header>
        <FeaturedContainer>
          <Featured 
            title="Inception"
            image={Inception} 
            text="In the Inception project, I engaged with Docker to construct and manage a self-contained infrastructure composed of interlinked services, each isolated within its own container. The tasks included creating Dockerfiles, setting up Docker Compose for service orchestration, configuring container networks and volumes, and ultimately ensuring a functional multi-container environment. Through practical application, this project solidified my understanding of containerization and its pivotal role in DevOps practices."
            link="https://github.com/ILKAY-BRAHIM/Inception"
            technologies={technologies1} />
        </FeaturedContainer >
        <Archive />
      </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  max-width: 1800px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`

const FeaturedContainer = styled(motion.div)`
width: 100%;
display: grid;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
text-align: center;
`



export default Projects;