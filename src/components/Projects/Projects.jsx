import styled from "@emotion/styled"
import postgresqlLogo from '../../assets/Postgresql-icon.svg';
import rubyLogo from '../../assets/ruby_logo.svg';
import rubyonrailsLogo from '../../assets/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../../assets/HTML5.svg';
import cssLogo from '../../assets/CSS3_logo.svg';
import twetablescreen from '../../assets/Projects/twetable.png'
import eatablescreen from '../../assets/Projects/Eatable.png'
import reactLogo from '../../assets/react.svg';
import javascriptLogo from '../../assets/JavaScript_logo.svg';
import { motion } from "framer-motion";

function Projects() {
  return(
    <ProjectsContainer>
      <h1>Some of my Projects</h1>
      <ProjectsGrid>
        <Project>
          <Card>
            <ProjectImage src={twetablescreen} alt="Twetable" />
            <h2>Twetable</h2>
            <Tech>
              <motion.img src={rubyLogo} style={{scale: .8}} alt="" />
              <motion.img src={rubyonrailsLogo} alt="ruby on rails" style={{ backgroundColor: '#CC0000' }} />
              <motion.img src={postgresqlLogo} alt="" />
              <motion.img src={htmlLogo} alt="" />
              <motion.img src={cssLogo} alt="" />
            </Tech>
          </Card>
        </Project>
        <Project>
          <Card>
            <ProjectImage src={eatablescreen} alt="Twetable" />
            <h2>Eatable</h2>
            <Tech>
              <motion.img src={reactLogo} alt="" />
              <motion.img src={javascriptLogo} alt="ruby on rails" style={{ padding: '1%', fill: "red"}} />
              <motion.img src={htmlLogo} alt="" />
              <motion.img src={cssLogo} alt="" />
            </Tech>
          </Card>
        </Project>
      </ProjectsGrid>
    </ProjectsContainer>

  )
}

export default Projects

const ProjectsContainer = styled.section`
  position: relative;
  padding: 5%;
  padding-bottom: 5rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #5f5f5f;
  z-index: -1;

  h1 {
    z-index: 2;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  grid-gap: 30px;
  width: -moz-available;          
  width: -webkit-fill-available; 
  z-index: 1;
`

const Project = styled.div`
`

const Card = styled.div`
  background-color: #242424;
  border-radius: 4%;
  max-width: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;

  h2 {
    text-align: center;
  }
  
  p {
    margin-bottom: .4rem;
  }

`

const Tech = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: .7rem;
  gap: .6rem;

  img {
    height: 2rem;
    width: 2rem;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5%;

`

