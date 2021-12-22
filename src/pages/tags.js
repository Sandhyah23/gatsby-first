import React from "react"
import Layout from "../components/Layout"
import slugify from "slugify"

import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
const tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const tags = setupTags(recipes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} Recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default tags
