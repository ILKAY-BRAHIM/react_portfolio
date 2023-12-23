import React from 'react'
import styled from 'styled-components';
import { Container, Div } from "../styles/styles";
import Techstack from "../components/Techstack";
import { motion } from 'framer-motion';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { faV } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { slideAnim } from "../animation";
import { useScroll } from "../util/useScroll";



const Kubernetes = {
  title: "Kubernetes",
  technologies: [
    "Cluster Setup",
    "Configuration",
    "Kubectl",
    "Pods",
    "Deployments",
    "Security",
    "Persistent Storage"
  ]
}

const Docker = {
  title: "Docker",
  technologies: [
    "Docker Compose",
    "Docker Swarm",
    "CI/CD",
    "Monitoring",
    "Dockerfiles",
    "Volumes",
    "Networking"
  ]
}

const Vagrant = {
  title: "Vagrant",
  technologies: [
    "Virtualization",
    "Vagrant Boxes",
    "Provisioning",
    "Networking",
    "Multi-Machine",
    "Plugins",
    "Synced Folders"
  ]
}

const Technologies = () => {
  const [ref, controls] = useScroll();


  return (
    <Div>
      <StyledTechnologies animate={controls} ref={ref} variants={slideAnim.up}>
        <Header>TECHNOLOGIES I'VE USED</Header>
        <Grid >
          <Techstack icon={faDharmachakra} title={Kubernetes.title} technologies={Kubernetes.technologies}/>
          <Techstack icon={faDocker} title={Docker.title} technologies={Docker.technologies}/>
          <Techstack icon={faV} title={Vagrant.title} technologies={Vagrant.technologies}/>
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
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
`

export default Technologies