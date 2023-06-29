import styled from "@emotion/styled";
import postgresqlLogo from '../../assets/icons/Postgresql-icon.svg';
import rubyLogo from '../../assets/icons/Ruby_logo.png';
import rubyonrailsLogo from '../../assets/icons/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../../assets/icons/HTML5.svg';
import cssLogo from '../../assets/icons/CSS3_logo.svg';
import twetablescreen from '../../assets/Projects/twetable.png';
import eatablescreen from '../../assets/Projects/Eatable.png';
import doablescreen from '../../assets/Projects/doable.png';
import cliviascreen from '../../assets/Projects/CLIvia-Generator.png';
import reactLogo from '../../assets/icons/react.svg';
import javascriptLogo from '../../assets/icons/JavaScript_logo.svg';
import { motion } from "framer-motion";

function Projects() {

  const text = 'My Projects';

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const hoverAnimation = {
    scale: 1.05,
    objectPosition: ["left 0%", "left 100%"],
    transition: {
      duration: 3,
    },
  };

  return(
    <ProjectsContainer>
      <MaxWidth>
        <h1>
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </h1>
        <ProjectsGrid>
          <Project
           variants={container}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
          >
            <Card >
              <ProjectImage 
                variants={item} 
                whileHover={hoverAnimation}
                src={twetablescreen} 
                alt="Twetable" 
              />
              <motion.h2 variants={item}>Twetable</motion.h2>
              <Tech>
                <motion.img variants={item} src={rubyLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={rubyonrailsLogo} whileHover={{scale: 1.2}} alt="ruby on rails" />
                <motion.img variants={item} src={postgresqlLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={htmlLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={cssLogo} whileHover={{scale: 1.2}} alt="" />
              </Tech>
            </Card>
          </Project>
          <Project
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <ProjectImage 
                variants={item}  
                whileHover={hoverAnimation}
                src={eatablescreen} 
                alt="Eatable" 
              />
              <motion.h2 variants={item}>Eatable</motion.h2>
              <Tech>
                <motion.img variants={item} src={reactLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={javascriptLogo} whileHover={{scale: 1.2}} alt="" style={{ padding: '1%' }} />
                <motion.img variants={item} src={htmlLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={cssLogo} whileHover={{scale: 1.2}} alt="" />
              </Tech>
            </Card>
          </Project>
          <Project
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <ProjectImage 
                variants={item}  
                whileHover={hoverAnimation}
                src={doablescreen} 
                alt="Doable" 
              />
              <motion.h2 variants={item}>Doable</motion.h2>
              <Tech>
                <motion.img variants={item} src={javascriptLogo} whileHover={{scale: 1.2}} alt="" style={{ padding: '1%' }} />
                <motion.img variants={item} src={htmlLogo} whileHover={{scale: 1.2}} alt="" />
                <motion.img variants={item} src={cssLogo} whileHover={{scale: 1.2}} alt="" />
              </Tech>
            </Card>
          </Project>
          <Project
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <ProjectImage 
                variants={item}  
                whileHover={hoverAnimation}
                src={cliviascreen} 
                alt="ClIvia generator" 
              />
              <motion.h2 variants={item}>CLIvia Generator</motion.h2>
              <Tech>
                <motion.img variants={item} src={rubyLogo} whileHover={{scale: 1.2}} alt="" style={{ padding: '1%' }} />
              </Tech>
            </Card>
          </Project>
        </ProjectsGrid>
      </MaxWidth>
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
  z-index: 0;
  text-align: center;

  h1 {
    z-index: 2;
    font-family: 'Ubuntu Mono';
    font-size: 1.8rem;
    font-weight: 400;
    filter: drop-shadow( -2px .7px 1.6px #000000a1 );
    margin-bottom: 1rem;
  }
`

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  grid-gap: 30px;
  width: -moz-available;          
  width: -webkit-fill-available; 
  z-index: 90;
`

const Project = styled(motion.div)`
  z-index: 90;
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

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5%;
  object-position: left 0%;
`

