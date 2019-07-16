// @flow
function countPage(total: number): number {
  const totalPage: number = parseInt(total / 20)
  if (totalPage * 20 < total) {
    return totalPage + 1
  }
  return totalPage
}

export default countPage
