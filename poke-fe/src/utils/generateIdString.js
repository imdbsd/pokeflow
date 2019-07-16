// @flow

function generateIdString(id: number = 0): string {
  if (id >= 100) {
    return `${id}`
  } else if (id >= 10) {
    return `0${id}`
  }
  return `00${id}`
}

export default generateIdString
