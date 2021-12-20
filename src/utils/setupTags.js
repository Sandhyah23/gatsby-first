const setupTags = function (recipes) {
  const tagList = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (tagList.hasOwnProperty(tag)) {
        tagList[tag] += 1
      } else {
        tagList[tag] = 1
      }
    })
  })

  const sortedTags = Object.entries(tagList).sort()
  return sortedTags
}

export default setupTags
