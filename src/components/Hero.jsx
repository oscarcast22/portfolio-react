import styled from '@emotion/styled'
import { colors } from '../styles/colors'
import TextSpan from './TextSpan';

const Container = styled.div`
  height: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  h1 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 3rem;
    line-height: 3.7rem;
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

function Hero() {
  const title = `Hi!, i'm Oscar,`.split('');
  const subtitle = `Full Stack Developer`.split('');

  return (
    <Container>
      <h1>
        {title.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </h1>
      <h1>
        {subtitle.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </h1>
    </Container>
  )
}

export default Hero