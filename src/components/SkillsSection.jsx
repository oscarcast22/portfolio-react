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
import rickandmorty from '../assets/rick-and-morty.gif';

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
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  align-items: center;
  margin-top: .3rem;
  @media (max-width: 700px) {
    flex-direction: column;

  }
  
  img {
    width: 350px;
    height: 280px;
    object-fit: cover;
    object-position: 100%;
    border-radius: 5%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    @media (max-width: 700px) {
      width: 290px;
      height: 300px;
      
    }

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

const TextAnimation = styled.div`
  
`
export default function Skills () {
  return (
    <>
      <SkillsSection>
        <Reveal ><h1>About me</h1></Reveal>
        <Presentation>
          <Info>
            <Reveal>
              <img src={rickandmorty} alt="" />
            </Reveal>
            <Reveal>
              <div >
                <p>
                  Full-Stack Web Developer passionate about technology.
                  Collaborative, interested to work alongside a dynamic team, curious, innovative and eager to learn new technologies. Currently
                  looking for new professional challenges in backend development projects with big impact in human life.
                </p>
              </div>
            </Reveal>
          </Info>
        </Presentation>
        <TextAnimation><p>some of my skills</p></TextAnimation>
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