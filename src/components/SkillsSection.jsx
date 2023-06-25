import styled from '@emotion/styled';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/next-js.svg';
import javascriptLogo from '../assets/JavaScript_logo.svg';
import postgresqlLogo from '../assets/Postgresql-icon.svg';
import rubyLogo from '../assets/ruby_logo.svg';
import rubyonrailsLogo from '../assets/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../assets/HTML5.svg';
import cssLogo from '../assets/CSS3_logo.svg';
import photoshopLogo from '../assets/Photoshop_logo.svg';
import illustratorLogo from '../assets/Illustrator_icon.svg';
import Reveal from "./Animations/Reveal";
import rickandmorty from '../assets/rick-and-morty.gif';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 5%;
  padding-bottom: 5.5rem;
  padding-top: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #4d4d4d;
  z-index: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
  padding: .5rem;
  gap: 1rem;
  width: 100%;  
  width: -webkit-fill-available; 
  z-index: 99;
  position: relative;

`

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: .1rem;
  width: 50px;
  z-index: 99;
  margin: auto;

  img {
    height: 40px;
    width: 40px;
    filter: drop-shadow( -2px .7px 1.6px #00000043 );
  }
  
  p {
    font-size: 1rem;
  }
`

const Curve = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 1;
  bottom: -1px;

  svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 100px;
    filter: drop-shadow( 10px 0px .25rem #00000056 );
  }
`

const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  align-items: center;
  margin-top: .3rem;
  z-index: 99;
  @media (max-width: 820px) {
    flex-direction: column;

  }

  p {
    background-image: linear-gradient(
      90deg, rgba(255,255,255,1) 0%,
      #c2fff6 50%, rgba(255,255,255,1) 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 4s linear infinite;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
  }


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

const Photo = styled(motion.img)`
  width: 350px;
  height: 280px;
  object-fit: cover;
  object-position: 100%;
  border-radius: 5%;
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    width: 290px;
    height: 300px;

  }
`

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
  z-index: 0;
`

const Skills = styled.div`
  background-color: #686767;
  border-radius: 1rem;
  text-align: center;
  padding-top: .3rem;
  padding-bottom: .3rem;
  max-width: 727px;
  margin: auto;
  margin-top: 1.5rem;
  width: 100%;
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  h2 {
    font-family: 'Ubuntu Mono';
  }
`

export default function About () {

  return (
    <>
      <SkillsSection>
        <MaxWidth>
          <Reveal>
            <h2>About me</h2>
          </Reveal>
          <Presentation>
            <Photo whileHover={{scale: 1.03}} src={rickandmorty} alt="" />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p>
                Passionate about technology, collaborative, interested to work alongside a dynamic team, curious, innovative and eager to learn new technologies. Currently
                looking for new professional challenges in backend development projects with big impact in human life.
              </p>
              <Skills>
                <h2>
                  some of my skills
                </h2>
                <Grid>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={reactLogo} alt="React.js"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={nextLogo} alt="Next.js" style={{scale: '1.2'}}/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={javascriptLogo} alt="Javascript"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={rubyLogo} alt="Ruby"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={rubyonrailsLogo} alt="Ruby on rails"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={postgresqlLogo} alt="PostgreSQL"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={htmlLogo} alt="PostgreSQL"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={cssLogo} alt="PostgreSQL"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={photoshopLogo} alt="PostgreSQL"/>
                  </Skill>
                  <Skill whileHover={{scale: 1.35}}>
                    <img src={illustratorLogo} alt="PostgreSQL"/>
                  </Skill>
                </Grid>
              </Skills>
            </div>
          </Presentation>
        </MaxWidth>
        <Curve>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#5f5f5f'}}></path>
          </svg>
        </Curve>
      </SkillsSection>
      
    </>
  )
}