import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion"

const Eatable = ({showEatable, setShowEatable}) => {

  const Backdrop = styled(motion.div)`
    position: fixed;
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
    padding: 40px 20px;
    background: #bfbfbf;
    border-radius: 10px;
    text-align: center;

    p{
      color: black;
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
      y: '150px',
      opacity: 1,
      transition: { delay: 0.5 }
    }
  }

  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
              <h1>Eatable</h1>
              <button onClick={() => setShowEatable(false)}>Cerrar</button>
            </Title>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste harum et quo quod officia minus provident voluptate ipsam, facilis est sed error fugiat ratione consequatur voluptas veritatis id? Aut, dolores!</p>
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Eatable;
