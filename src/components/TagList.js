import React from "react"
import { Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
const TagList = ({ recipes }) => {
  const tags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">ś
        {tags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
