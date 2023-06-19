import styled from '@emotion/styled'
import { colors } from '../../styles/colors'

const Header = styled.header`
  background-color: #0000002e;
  backdrop-filter: blur(50px);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const Menu = styled.ul`
  display: flex;
  justify-content: left;
  gap: 15px;
  padding: 0;
`

function Navbar() {
    return (
      <Header>
        <Menu>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </Menu>
        <p>Oscar</p>
      </Header>
    );
  }
  
  export default Navbar;
  