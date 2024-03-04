import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

import Featured from '../components/Featured';
import Archive from '../components/Archive';
import Inception from "../assets/img/inception-logo_1.png"
import WebServ from "../assets/img/webserv-logo.png"
import Inception_of_thing from "../assets/img/kubernetes-logo.png"
import work_on from "../assets/img/working-on_1.png"

const tech_Inception = [
  "Docker",
  "Docker_Compose",
  "Dockerfiles",
  "Volumes",
  "Networking"
]

const tech_WebServ = [
  "HTTP",
  "Non-Blocking_IO",
  "cgi",
  "cookies",
  "sessions",
  "configurations"
]

const tech_Inception_of_thing = [
  "Kubernetes",
  "Docker",
  "Continuous_Integration",
  "App_Deployment",
]

const tech_bgp = [
  "VXLAN",
  "BGP-EVPN",
  "GNS3",
  "Network_Configuration",
  "Optimization",
]

function Projects() {
  return (
      <StyledProjects id="projects">
        <Header><span>02.</span> PROJECTS</Header>
        <FeaturedContainer>
        <Featured 
            title="Bgp At Doors of Autonomous Systems is Simple"
            image={work_on} 
            text="
            This project is designed to enhance my networking expertise by simulating VXLAN and BGP-EVPN networks in GNS3. Through hands-on experience, 
             refining my skills in network configuration, troubleshooting, and optimization, 
            ultimately deepening my understanding of networking principles."
            link="https://github.com/ILKAY-BRAHIM/Bgp-At-Doors-of-Autonomous-Systems-is-Simple"
            technologies={tech_bgp} />
        <Featured 
            title="Inception_of_things"
            image={Inception_of_thing} 
            text="The project serves as an introduction to Kubernetes from a developer’s angle. It entails configuring small clusters and 
            examining the intricacies of continuous integration. The outcome is anticipated to include the mastery of maintaining operational 
            clusters within Docker and the capability to employ continuous integration for the deployment of app."
            link="https://github.com/ILKAY-BRAHIM/Inception-of-Things-IoT-"
            technologies={tech_Inception_of_thing} />
          <Featured 
            title="WebServ"
            image={WebServ} 
            text="The project provides an opportunity to develop a custom HTTP server. The end result will be a server that can interact with a real browser, 
            offering a practical understanding of HTTP, an essential internet protocol. This knowledge promises to be valuable, regardless of whether 
            website development is in future plans."
            link="https://github.com/ILKAY-BRAHIM/WebServ"
            technologies={tech_WebServ} />
          <Featured 
            title="Inception"
            image={Inception} 
            text="This project demonstrates the power of containerization by encapsulating various services, creating an interconnected web ecosystem. 
            From Nginx as the gateway to FTP for file sharing, each service is implemented from scratch in its own Docker container and seamlessly connected through Docker-Compose."
            link="https://github.com/ILKAY-BRAHIM/Inception"
            technologies={tech_Inception} />
        </FeaturedContainer >
        <Archive />
      </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  max-width: 1800px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
`

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: flex;
`

const FeaturedContainer = styled(motion.div)`
width: 100%;
display: grid;
gap: 2rem;
grid-template-columns: repeat(3, 1fr); // This will always create 3 columns
@media (max-width: 850px) {
  grid-template-columns: repeat(1, 1fr);
}

}
// text-align: center;
`



export default Projects;