import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p >I bring an  background in automating, configuring, and optimizing virtualized environments to meet the demanding needs of high-traffic applications. With a  command of Vagrant, I construct and manage consistent development environments, facilitating a seamless bridge between development and production. My expertise in Kubernetes allows me to orchestrate containerized applications with precision, ensuring scalable, fault-tolerant systems that adapt fluidly to user demands. I harness the power of Docker to encapsulate application dependencies in lightweight containers, boosting portability and efficiency. <br /> 
      <br/></motion.p> <br />
      <p className='bold'>Recent technologies I've used:</p>
        <Technologies>
          <Social>
            <Circle/>
            <li>Vagrant</li>
          </Social>
          <Social>
            <Circle/>
            <li>kubernetes</li>
          </Social>
          <Social>
            <Circle/>
            <li>Docker</li>
          </Social>
          <Social>
            <Circle/>
            <li>C++</li>
          </Social>
          <Social>
            <Circle/>
            <li>C</li>
          </Social>
        </Technologies>
    </StyledAboutMe>  
)}

const StyledAboutMe = styled(Description)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex: 3;
margin-right: 2rem;
p span, .bold{
  font-family: var(--font-sans);
  color: var(--color-header);
}
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`


export default AboutMe;