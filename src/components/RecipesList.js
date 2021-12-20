import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  console.log(recipes)

  return (
    <div className="recipes-list">
      {recipes.map((recipe, index) => {
        const { title, cookTime, prepTime, image } = recipe
        const imagePath = getImage(image)
        const slugTitle = slugify(title, { lower: true })
        return (
          <Link to={`/${slugTitle}`} key={index} className="recipe">
            <GatsbyImage
              image={imagePath}
              className="recipe-img"
              alt={title}
            ></GatsbyImage>
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
