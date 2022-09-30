import { motion } from "framer-motion";


import Layout from '../components/layout'
import Banner from '../components/Banner'
import NavBar1 from '../components/NavBar1'
import NavBar2 from '../components/NavBar2'
import NavBar3 from '../components/NavBar3'
import Heading from '../components/Heading/'
import Feature from '../components/Feature/'
import Moto from "../components/Moto/Moto";
import Showcase from "../components/Showcase/Showcase";
import Pricing from '../components/Pricing/'
import CopyRight from '../components/Copyright'
const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Layout>
          <NavBar2 />
          <NavBar1 />
          <motion.section
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={content}
              animate="animate"
              initial="initial"
            >
              <motion.div
                variants={title}
              >
                <Heading />
                <Feature />
                <Pricing />
                <Moto />
                <Showcase />
                <CopyRight />
              </motion.div>
            </motion.div>
          </motion.section>
        </Layout>
      </div>
      <style jsx>{`
`}</style>

      <style jsx global>{`
body{
      font-family: font-sans-serif;
}
`}</style>



    </div>

  )
}