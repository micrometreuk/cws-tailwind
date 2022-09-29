import Layout  from '../components/layout'
import Banner from '../components/Banner'
import NavBar1 from '../components/NavBar1'
import NavBar2 from '../components/NavBar2'
import Heading from '../components/Heading/'
import Feature from '../components/Feature/'
import Pricing from '../components/Pricing/'
import CopyRight from '../components/Copyright'
export default function Home() {
  return (
  <div className="home">
 <div className="home-container">
    <Layout>
    <NavBar2 />
    <Heading />
    <Feature />
    <CopyRight />
    </Layout>
   </div>
    <style jsx>{`
`}</style>

<style jsx global>{`
body{
      font-family: font-sans-serif;
  padding: 0rem;
  width: 100%;
}
`}</style>



</div>

  )
}
