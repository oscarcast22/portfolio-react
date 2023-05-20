import styled from '@emotion/styled'
import { colors } from '../styles/colors'

const Container = styled.div`
  background-color: ${colors.white};
  height: 360px;
  padding: 0 20px;

  h1 {
    color: ${colors.black};
  }
`

function Hero() {
  return (
    <Container>
      <h1>Hero</h1>
    </Container>
  )
}

export default Hero