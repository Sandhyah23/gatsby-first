const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`src/templates/tag-template.js`)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slugPath = slugify(tag, { lower: true })
      createPage({
        path: `tags/${slugPath}`,
        component: templatePath,
        context: {
          tag: tag,
        },
      })
    })
  })
}
