import styled from '@emotion/styled';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/next-js.svg';
import javascriptLogo from '../assets/Javascript-logo.png';
import postgresqlLogo from '../assets/Postgresql.png';
import rubyLogo from '../assets/Ruby_logo.png';
import rubyonrailsLogo from '../assets/Ruby_On_Rails_Logo.svg';
import Reveal from "./Animations/Reveal"

const SkillsSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 35px;

  h2 {
    margin: auto;
  }

`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
  grid-gap: 35px;
  
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 105px;
  align-items: center;
  gap: 15px;

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
    <SkillsSection>
      <Reveal slideAnimation = {false}><h2>Skills</h2></Reveal>
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
      </SkillsGrid>
    </SkillsSection>
  )
}