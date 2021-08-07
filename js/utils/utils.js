export function getValue(min, max) {
  return (Math.random() * (max + 1 - min + min)) | 0
}

export function getWeighted(list, weight) {
  let random = Math.random()

  return weight.reduce((sum, x, i) => {
    if(random === Infinity) return sum
    if((sum + x) < random) return +((sum + x).toFixed(2))
    random = Infinity
    return list[i]
  }, 0)
}

export function toHex(num) {
  return num.toString(16).padStart(2, '0')
}
