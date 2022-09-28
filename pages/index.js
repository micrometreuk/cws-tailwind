import Layout  from '../components/layout.jsx'
import Heading from '../components/Heading/'
import Feature from '../components/Feature/'

export default function Home() {
  return (
  <div className="home">
 <div className="home-container">
    <Layout>
    <Heading />
    <Feature />
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
