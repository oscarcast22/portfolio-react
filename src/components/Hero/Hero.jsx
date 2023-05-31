import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import TextSpan from './TextSpan';
import Reveal from '../Animations/Reveal';

const Container = styled.div`
  min-height: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  gap: .7rem;

  h1 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 600;
  }

  h2 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    flex-direction: row;
  }

  p:hover {
    color: ${colors.gray.medium};

    transition: color 0.2s ease-in-out;
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

const Word = styled.div`
  display: inline-block;
`

const WordBold = styled.div`
  display: inline-block;
  font-weight: 600;
  color: ${colors.aqua};

  span:hover {
    color: ${colors.white};
    transition: color 0.2s ease-in;
    cursor: default;
  }
`

function Hero() {
  const title1 = `Hey, `.split('');
  const title2 = `i'm `.split('');
  const title3 = `Oscar.`.split('');
  const subtitle1 = `I'm `.split('');
  const subtitle2 = `a `.split('');
  const subtitle3 = `Full `.split('');
  const subtitle4 = `Stack `.split('');
  const subtitle5 = `Developer.`.split('');

  return (
    <Container>
      <Reveal>
      <h1>
        <Word>
          {title1.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <Word>
          {title2.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <Word>
          {title3.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
      </h1>
      </Reveal>
      <h2>
        <Reveal>
        <Word>
          {subtitle1.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <Word>
          {subtitle2.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <WordBold>
        <Word>
          {subtitle3.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <Word>
          {subtitle4.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        <Word>
          {subtitle5.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter }
            </TextSpan>
          ))}
        </Word>
        </WordBold>
        </Reveal>
      </h2>
      <Reveal>
        <p>
          {`I have a passion for web development and love to create for web and mobile devices.`}
        </p>
      </Reveal>
    </Container>
  )
}

export default Hero