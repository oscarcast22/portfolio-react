import styled from '@emotion/styled';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/next-js.svg';
import javascriptLogo from '../assets/Javascript-logo.png';
import postgresqlLogo from '../assets/Postgresql.png';
import rubyLogo from '../assets/Ruby_logo.png';
import rubyonrailsLogo from '../assets/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../assets/HTML_logo.png';
import cssLogo from '../assets/CSS_logo.png';
import photoshopLogo from '../assets/photoshoplogo.png';
import illustratorLogo from '../assets/illustrator.png';
import Reveal from "./Animations/Reveal";

const SkillsSection = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #4d4d4d;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
  align-items: center;
  grid-gap: 30px;
  width: -moz-available;          
  width: -webkit-fill-available; 
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 105px;
  height: 137px;
  align-items: center;
  gap: 15px;
  margin: auto;

  img {
    height: 95px;
    width: 95px;
    background-color: #f6f6f6;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`


export default function Skills () {
  return (
    <>
      <SkillsSection>
      <Reveal ><h1>My skills</h1></Reveal>
        <SkillsGrid>
          <Reveal  slideAnimation = {false} >
            <Skill>
              <img src={reactLogo} alt="React.js" style={{ padding: '10%' }}/>
              <p>React</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={nextLogo} alt="Next.js" style={{ padding: '10%' }}/>
              <p>Next.js</p>
            </Skill>
          </Reveal> 
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={javascriptLogo} alt="javascript logo"/>
              <p>JavaScript</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={rubyLogo} alt="ruby logo" />
              <p>Ruby</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={rubyonrailsLogo} alt="ruby on rails" style={{ padding: '8%', backgroundColor: '#CC0000' }}/>
              <p>Rails</p>
            </Skill>
          </Reveal> 
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={postgresqlLogo} alt="postgresql" />
              <p>PostgreSQL</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={htmlLogo} alt="HTML 5" />
              <p>HTML</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={cssLogo} alt="CSS" />
              <p>CSS</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={photoshopLogo} alt="photoshop" />
              <p>Photoshop</p>
            </Skill>
          </Reveal>
          <Reveal slideAnimation = {false}>
            <Skill>
              <img src={illustratorLogo} alt="illustrator" />
              <p>Illustrator</p>
            </Skill>
          </Reveal>
        </SkillsGrid>
      </SkillsSection>
    </>
  )
}