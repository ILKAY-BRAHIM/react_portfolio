import React from 'react'
import styled from 'styled-components';
import { Container, Div } from "../styles/styles";
import Techstack from "../components/Techstack";
import { motion } from 'framer-motion';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
// import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { slideAnim } from "../animation";
import { useScroll } from "../util/useScroll";



const DevOps = {
  title: "DevOps",
  technologies: [
    "Kubernetes",
    "Docker",
    "Helm",
    "Vagrant",
    "ArgoCD",
    "Jenkins",
    "GitOps",
  ]
}

const Frontend = {
  title: "Frontend",
  technologies: [
    "javascript",
    "React",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
  ]
}

const Backend = {
  title: "Backend",
  technologies: [
    "Django",
    "Python",
    "Django Rest Framework",
    "PostgreSQL",
    "MariaDB",
    "SQLite",
  ]
}

const Technologies = () => {
  const [ref, controls] = useScroll();


  return (
    <Div>
      <StyledTechnologies animate={controls} ref={ref} variants={slideAnim.up}>
        <Header>TECHNOLOGIES I'VE USED</Header>
        <Grid >
          <Techstack icon={faSitemap} title={DevOps.title} technologies={DevOps.technologies}/>
          <Techstack icon={faDatabase} title={Backend.title} technologies={Backend.technologies}/>
          <Techstack icon={faFileCode} title={Frontend.title} technologies={Frontend.technologies}/>
          {/* <Techstack icon={faV} title={Vagrant.title} technologies={Vagrant.technologies}/> */}
        </Grid>
      </StyledTechnologies>
    </Div>
  )
}

const StyledTechnologies = styled(Container)`
  flex-direction:  column;
`

const Header = styled.h3`
margin-bottom: 4rem;
`

const Grid = styled(motion.div)`
  width: 105%;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
`

export default Technologies