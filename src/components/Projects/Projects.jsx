import styled from "@emotion/styled"
import postgresqlLogo from '../../assets/Postgresql.png';
import rubyLogo from '../../assets/Ruby_logo.png';
import rubyonrailsLogo from '../../assets/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../../assets/HTML_logo.png';
import cssLogo from '../../assets/CSS_logo.png';
import twetablescreen from '../../assets/twetable.png'

function Projects() {
  return(
    <ProjectsContainer>
      <h1>Some of my Projects</h1>
      <ProjectsGrid>
        <Project>
          <Card>
            <Screen src={twetablescreen} alt="" />
            <h2>Twetable</h2>
            <p>
              A full stack web aplication made with Rails techonology {'(click image to see more)'}
            </p>
            <Tech>
              <img src={rubyLogo} alt="" />
              <img src={rubyonrailsLogo} alt="ruby on rails" style={{ padding: '1%', backgroundColor: '#CC0000'}} />
              <img src={postgresqlLogo} alt="" />
              <img src={htmlLogo} alt="" />
              <img src={cssLogo} alt="" />
            </Tech>
          </Card>
        </Project>
      </ProjectsGrid>
    </ProjectsContainer>

  )
}

export default Projects

const ProjectsContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: blueviolet;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  align-items: center;
  grid-gap: 30px;
  width: -moz-available;          
  width: -webkit-fill-available; 
`

const Project = styled.div`
`

const Card = styled.div`
  border: 1px solid #009a8f;
  background-color: #010046;
  border-radius: 4%;
  max-width: 280px;
  margin: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

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
  margin-bottom: .25rem;

  img {
    height: 38px;
    width: 38px;
    background-color: #f6f6f6;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`

const Screen = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 5%;

`