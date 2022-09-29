import Layout  from '../components/layout'
import Banner from '../components/Banner'
import NavBar1 from '../components/NavBar1'
import NavBar2 from '../components/NavBar2'
import Heading from '../components/Heading/'
import Feature from '../components/Feature/'
import Pricing from '../components/Pricing/'
import CopyRight from '../components/Copyright'

import { useRef } from "react";
import { useInView } from "framer-motion";

export function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.10s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  return (
    <>
        <Layout>
    <NavBar2 />
      <Section >  
    <Heading />
      </Section>
      <Section >  
    <Feature />
      </Section>
      <Section >  
    <Pricing />
      </Section>
      <Section >  
    <CopyRight />
      </Section>
    </Layout>
      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
}
