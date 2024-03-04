import React from 'react'
// animations
import {motion} from "framer-motion"
import { Container, Div, Hide} from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useScroll } from '../util/useScroll';
import { faFile, faPhone } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => { 
  const [ref, controls] = useScroll();

  return (
    <Div>
      <ContactStyle animate={controls} ref={ref} variants={staggerAnim} id="contact">
        <div>
          <Hide>
            <motion.h2 variants={slideAnim.up}><span>03.</span> CONTACT</motion.h2>
          </Hide>
        </div>
        <ContactInfo>
          <Hide>
            <Info>
            <IconContainer variants={slideAnim.up}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </IconContainer>
            <motion.a variants={slideAnim.up}>ibrahimchifour@gmail.com</motion.a>
            </Info>
          </Hide>
          <Hide>
            <Info>
            <IconContainer variants={slideAnim.up}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </IconContainer>
            <motion.a variants={slideAnim.up} href="https://www.linkedin.com/in/brahim-chifour-639652239/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            </motion.a>
          </Info>
          </Hide>
          <Hide>
            <Info>
            <IconContainer variants={slideAnim.up}>
              <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
            </IconContainer>
            <motion.a variants={slideAnim.up} href="https://drive.google.com/file/d/15ilr62KBv3g4laM9SdRezQQqKCiLkuRZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
            </motion.a>
          </Info>
          </Hide>
          <Hide>
            <Info>
              <IconContainer variants={slideAnim.up}>
                  <FontAwesomeIcon icon={faPhone  }></FontAwesomeIcon>
              </IconContainer>
              <motion.a variants={slideAnim.up}>+212 642191588</motion.a>
            </Info>
          </Hide>
          <Hide>
          </Hide>
        </ContactInfo>
        </ContactStyle>
    </Div>
  )
}

const ContactStyle = styled(Container)`
min-height: 90vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
max-width: 35rem;
button{
  margin-top: 1rem;
}
`
const IconContainer = styled(motion.div)`
background: var(--color-bg);
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

const Info = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
margin-bottom: 2rem;
`



export default Contact;