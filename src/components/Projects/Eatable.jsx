import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion"
import circlexmark from '../../assets/circle-xmark-regular.svg';
import eatablescreen from '../../assets/Projects/Eatable.png';
import eatablescreen3 from '../../assets/Projects/Eatable3.png';
import eatablescreen4 from '../../assets/Projects/Eatable4.png';
import eatablescreen5 from '../../assets/Projects/Eatable5.png';
import eatablescreen6 from '../../assets/Projects/Eatable6.png';
import githubIcon from '../../assets/icons/github-cat.svg';
import figmaLogo from '../../assets/icons/Figma-logo.svg';

const Eatable = ({showEatable, setShowEatable}) => {

  const Backdrop = styled(motion.div)`
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000008a;
    z-index: 99;
  `
  const Modal = styled(motion.div)`
    max-width: 720px;
    margin: auto;
    padding: 15px 30px;
    background: #ebebeb;
    border-radius: 10px;

    h2{
      color: #e76a94;
      font-size: 2rem;
      margin-left: 20px;
    }

    p{
      color: black;
      font-weight: 500;
      text-align: left;
      margin: 20px;
    }
  `

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const modal = {
    hidden:{
      y: '-100vh',
      opacity: 0
    },
    visible:{
      y: '100px',
      opacity: 1,
      transition: { delay: 0.5 }
    }
  }

  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
      height: 30px;
    }
  `

  const ScreenGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    grid-gap: 30px;
    width: -moz-available;          
    width: -webkit-fill-available; 

    img{
      min-width: 300px;
      height: 649px ;
      border-radius: 15px;
      box-shadow: -3px 3px 9px 1px rgba(0, 0, 0, 0.2);
    }
  `

  const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;

    div{
      display: flex;
      flex-direction: row;
      gap: 10px;

      a{
        font-weight: 600;
        text-decoration: none;
        color: #ff3f7f;
        :visited{
          color: #c83566;
        }
      }
    }
  `

  return (
    <AnimatePresence >
      { showEatable && (
        <Backdrop
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <Modal
            variants={modal}
          >
            <Title>
              <h2>Eatable</h2>
              <img src={circlexmark} alt="" onClick={() => setShowEatable(false)} />
            </Title>
            <p>
              Cree una aplicación web que presenta platillos, interactuando con una API Rest para ofrecer una experiencia 
              fluida y atractiva. Utilicé React.js para el frontend, asegurando un 
              rendimiento óptimo y una interfaz dinámica. Combinado con HTML y 
              CSS, esta implementación demostró mi habilidad para construir 
              aplicaciones web modernas y visualmente atractivas, mientras optimizo el consumo de datos externos a traves de una API.
            </p>
            <Links>
              <div>
                <img style={{width:'30px'}} src={githubIcon} alt="" />
                <a href="https://github.com/codeableorg/react-eatable-oscarcast22" target="blank">Repositorio</a>
              </div>
              <div>
                <img style={{width:'20px'}} src={figmaLogo} alt="" />
                <a href="https://www.figma.com/file/9iX52juOI5ZghyewK0svxO/Eatable?type=design&node-id=2160-162&mode=design&t=p6cdMyw2h5DqHLhe-0" target="blank">Figma</a>
              </div>
            </Links>
            <ScreenGrid>
              <img src={eatablescreen3} alt="" />
              <img src={eatablescreen} alt="" />
              <img src={eatablescreen4} alt="" />
              <img src={eatablescreen5} alt="" />
              <img src={eatablescreen6} alt="" />
            </ScreenGrid>
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Eatable;
