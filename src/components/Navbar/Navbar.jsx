import styled from '@emotion/styled'

const Nav = styled.section`
  backdrop-filter: blur(40px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
`

const Menu = styled.ul`
  display: flex;
  justify-content: left;
  gap: 15px;
  padding: 0;
`

function Navbar() {
    return (
      <Nav>
        <Menu>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </Menu>
        <p>Oscar</p>
      </Nav>
    );
  }
  
  export default Navbar;
  