import Head from "next/head";
import Banner from '../components/Banner'
import NavBar1 from '../components/NavBar1'
import NavBar2 from '../components/NavBar2'
import NavBar3 from '../components/NavBar3'
import Heading from '../components/Heading/'
export const siteTitle = "Croydon Web Services";

export default function Layout({ children }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/logo1.svg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Croydon and surrounding areas."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="Croydon Web Services"
          content={siteTitle}
        />
        <title>{siteTitle}</title>
      </Head>
      <NavBar2 />
      <NavBar1 />
      <main>{children}</main>
    </div>
  );
}
