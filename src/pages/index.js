import React from "react"
import Particles from "react-particles-js"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import * as styles from "./index.module.css"
import About from "../components/about"
import Links from "../components/links"
import particleOptions from "../../assets/particles.json"

import { initializeApp } from "firebase/app"
import * as config from "../utils/config"

// Initialize Firebase
initializeApp(config)

const App = () => {
  const data = useStaticQuery(graphql`
    query {
      minimalistConfig(id: { eq: "minimalist-config" }) {
        title
        description
        siteUrl
        appName
      }
    }
  `)

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <title>{data.minimalistConfig.title}</title>
        <meta name="title" content={data.minimalistConfig.title} />
        <meta name="description" content={data.minimalistConfig.description} />
        <link rel="canonical" href={data.minimalistConfig.siteUrl} />

        <meta name="application-name" content={data.minimalistConfig.appName} />
        <meta name="theme-color" content="#48bfcd" />
        <meta
          name="apple-mobile-web-app-title"
          content={data.minimalistConfig.appName}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZ3SWHP93H"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EZ3SWHP93H');
        </script>
      </Helmet>

      <Particles className={styles.particles} params={particleOptions} />

      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <About />
          <Links />
        </div>
      </div>
    </>
  )
}

export default App
