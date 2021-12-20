import React from "react"
import { Link } from "gatsby"
import setupTags from "../utils/setupTags"

const TagList = ({ recipes }) => {
  const tags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
