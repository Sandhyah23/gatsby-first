import React from "react"
import Layout from "../components/Layout"

import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

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
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
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
