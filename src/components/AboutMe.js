import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p >Experienced Software Engineer specializing in backend development, utilizing Python and Django to create robust, scalable solutions. 
        Proficient in designing efficient server-side architectures, RESTful APIs, and database management, I collaborate seamlessly with cross-functional 
        teams to deliver high-quality software products. As a skilled DevOps programmer, I excel in deploying infrastructure as code using Terraform and orchestrating 
        containerized applications with Docker and Kubernetes. My expertise extends to implementing CI/CD pipelines with Jenkins, enhancing project efficiency. Motivated by a 
        passion for innovation, I thrive in dynamic environments, contributing a strategic mindset, strong problem-solving abilities, 
        and a commitment to staying current with industry best practices.<br /> 
      <br/></motion.p> <br />
      <p className='bold'>Langage I use:</p>
        <Technologies>
          <Social>
            <Circle/>
            <li>C++</li>
          </Social>
          <Social>
            <Circle/>
            <li>C</li>
          </Social>
          <Social>
            <Circle/>
            <li>Bash Scripting</li>
          </Social>
          <Social>
            <Circle/>
            <li>Javascript</li>
          </Social>
          <Social>
            <Circle/>
            <li>Python</li>
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