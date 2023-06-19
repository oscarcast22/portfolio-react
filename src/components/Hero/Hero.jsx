import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import Presentation from './TextPresentation'


const Container = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;
  gap: .5rem;


  h1 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 4rem;
    line-height: 4.7rem;
    font-weight: 600;
  }

  h2 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 2rem;
    line-height: 2.7rem;
    font-weight: 400;
    flex-direction: row;
  }
  
  p {
    font-size: 1.2rem;
  }

  p:hover {
    text-shadow: 0 0 20px ${colors.aqua};
    transition: text-shadow 0.2s ease-in;
    cursor: default;
  }

  span {
    display: inline-block;
  }

  span:hover {
    color: ${colors.aqua};
    transition: color 0.2s ease-in;
    cursor: default;
  }
`

const Dotgrid = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, #050505 10%, transparent 11%);
  background-size: 2em 2em;
  opacity: 0.95;
`

function Hero() {

  return (
    <Container>
      <Dotgrid></Dotgrid>
      <Presentation/>
    </Container>
  )
}

export default Hero