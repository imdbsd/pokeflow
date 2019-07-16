function getMaximumStats(stats) {
  let max = 0
  stats.forEach(stat => {
    if (stat.baseStat > max) {
      max = stat.baseStat
    }
  })
  return max
}

export default getMaximumStats
