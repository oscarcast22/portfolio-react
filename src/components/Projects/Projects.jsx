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
            <ProjectImage src={twetablescreen} alt="Twetable" />
            <h2>Twetable</h2>
            <Tech>
              <img src={rubyLogo} alt="" />
              <img src={rubyonrailsLogo} alt="ruby on rails" style={{ padding: '1%', fill: "red"}} />
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
  position: relative;
  padding: 2rem;
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

