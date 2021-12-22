import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: description || site.siteMetadata.description,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
