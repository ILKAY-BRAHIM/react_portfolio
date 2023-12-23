import React from 'react'
import styled from 'styled-components'
import { Technologies } from '../styles/styles'
import { motion } from "framer-motion"
import { useScroll } from '../util/useScroll';
import { slideAnim } from "../animation"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Featured({title, image, text, link, technologies}) {
  const [ref, controls] = useScroll();

  return (
      <FeaturedProject animate={controls} ref={ref} variants={slideAnim.up}>
         <Image>
             <img src={image} alt="project_video" controls/>
         </Image>
         <About>
           <Header>
             <p>Featured</p>
             <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
           </Header>
           <AboutText>
             <p>{text}</p>
           </AboutText>
           <More>
             <Technologies>
             {technologies?.map((technology) => (
               <li key={technology}>{technology}</li>
             ))}
             </Technologies>
             <a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
           </More>
         </About>
      </FeaturedProject>
  )
}

const FeaturedProject = styled(motion.div)`
  margin-bottom: 4rem;
  @media (min-width: 850px) {
    display: flex;
    margin: 4rem 15rem;
  }
`;

const Header = styled.div`
padding: 1rem 2rem;
p{
  font-weight: bold;
  font-size: 0.7rem;
  color: var(--color-main)
}
`
const AboutText = styled.div`
  padding: 2rem;
  margin: 0rem 1rem;
  background: var(--color-bg-2);
  max-width: 100%;
  border-radius: 20px;
`
const More = styled.div`
padding: 1rem;
display: flex;
gap: 0.75rem;
align-items: center;
`

const About = styled.div`
  flex: 2;
`

const Image = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  // align-items: center;
  // justify-content: flex-end;
  // overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: scale-down; 
  }
`



// const img = styled.image`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `

export default Featured;
