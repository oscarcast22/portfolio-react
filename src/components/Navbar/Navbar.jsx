import styled from '@emotion/styled'

const Header = styled.nav`
  backdrop-filter: blur(40px);
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  width: 100vw;
  height: 60px;
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
  