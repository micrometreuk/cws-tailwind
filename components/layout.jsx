import Head from "next/head";

export const siteTitle = "Croydon Web Services";

export default function Layout({ children }) {
  return (
    <div className="section">
      <Head>
        <link rel="icon" href="/logo1.svg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff"/>
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
      <main>{children}</main>
    </div>
  );
}
