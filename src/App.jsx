import About from "./componets/About";
import Experience from "./componets/Experience";
import Header from "./componets/Header";
import Presentation from "./componets/Presentation";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigatePage } from "./hooks/useNavigatePage";
import { useScrollListener } from "./utilities/useScrollListener";
import { useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  
  const {about, experience, skills, contact, projects} = useNavigatePage()
  const [up, setUp] = useState(false)
  useScrollListener(setUp)
  
  return (
    <main>
      <Header/>
      <motion.div  
        initial={{opacity: 0, scale: 0}} 
        whileInView={{opacity: 1, scale: 1}} 
        transition={{duration: 1}}
        viewport={{once: true}}
      >
        <Presentation/>
      </motion.div>
      <motion.div
        ref={about} 
        initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{once: true}}
      >
        <About/>
      </motion.div>
      <motion.div
        ref={skills}
        initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Skills/>
      </motion.div>
      <motion.div
        ref={experience}
        initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Experience/>
      </motion.div>
      <motion.div
        ref={projects}
        initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Projects/>
      </motion.div>
      <motion.div
        ref={contact}
        initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Contact/>
      </motion.div>
      <AnimatePresence mode="wait">
        {up && (
          <motion.div
            key="scroll-button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-0 right-0 m-5 bg-[#51a0ab] cursor-pointer"
            onClick={() => window.scroll(0, 0)}
          >
            <p>
              <FontAwesomeIcon 
                className="py-4 px-6 text-white text-1xl sm:text-2xl" 
                icon={faArrowUp}
              />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer/>
      <Footer/>
    </main>
  )
}

export default App
