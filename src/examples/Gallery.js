import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Gallery = props => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(data)

  return (
    <Wrapper>
      {nodes.map((img, index) => {
        const pathToImage = getImage(img)

        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              className="gallery-img"
              alt={img.name}
            />
          </article>
        )
      })}
    </Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        relativePath
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
