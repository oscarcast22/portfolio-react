import styled from '@emotion/styled'

const NavSection = styled.nav`
  backdrop-filter: blur(35px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
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

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

function Navbar() {
    return (
      <NavSection>
        <MaxWidth>
         <Menu>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
         </Menu>
         <p>Oscar</p>
        </MaxWidth>
      </NavSection>
    );
  }
  
  export default Navbar;
  