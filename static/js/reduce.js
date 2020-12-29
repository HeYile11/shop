module.exports = function (func, projectList) {
  let total = 0
  for (let i = 0; i < projectList.length; i++) {
    for (let j = 0; j < projectList[i].content.length; j++) {
      if (projectList[i].content[j].stypeid === true) {
        total = func(total, projectList[i].content[j].numprice)
      }
    }
  }
  return total
}
