import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const Contact = ({ data }) => {
  console.log(data)
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby kinfolk air plant YOLO, meditation ramps try-hard 8-bit
              blog mustache marfa literally enamel pin letterpress affogato.
              Readymade dreamcatcher VHS vexillologist disrupt whatever jean
              shorts jianbing. Scenester occupy pinterest meggings shoreditch
              keytar.
            </p>
            <p>
              Street art iceland drinking vinegar irony kombucha kinfolk lomo
              hoodie.
            </p>
            <p>
              Franzen slow-carb meh, pitchfork swag austin stumptown gluten-free
              banjo pickled microdosing whatever tousled.
            </p>
          </article>
          <article>
            <form action="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">Submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome recipes</h5>

          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default Contact
