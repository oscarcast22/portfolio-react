import styled from '@emotion/styled'

const Nav = styled.section`
  backdrop-filter: blur(35px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
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
  