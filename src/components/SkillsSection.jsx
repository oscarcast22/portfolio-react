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
  padding: 5%;
  padding-bottom: 5rem;
  padding-top: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #4d4d4d;
  z-index: -1;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(108px, 1fr));
  align-items: center;
  grid-gap: 30px;
  width: -moz-available;          
  width: -webkit-fill-available; 
  z-index: 2;
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
    height: 130px;
  }
`

const Presentation = styled.div`
  
`

const Info = styled.div`

`

const TextAnimation = styled.div`
  
`
export default function Skills () {
  return (
    <>
      <SkillsSection>
        <Presentation>
          <Info>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis dignissimos in, cumque alias illo ad</p>
            
          </Info>
          <TextAnimation><p>i Love to code</p></TextAnimation>
        </Presentation>
        <Reveal ><h1>About me</h1></Reveal>
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
        <Curve>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#5f5f5f'}}></path>
          </svg>
        </Curve>
      </SkillsSection>
    </>
  )
}