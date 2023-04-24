export function getValue(min, max) {
  return (Math.random() * (max + 1 - min) + min) | 0
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

export function hexToRange(value) {
  return [
    [0,15],
    [16,31],
    [32,47],
    [48,63],
    [64,79],
    [80,95],
    [96,111],
    [112,127],
    [128,143],
    [144,159],
    [160,175],
    [176,191],
    [192,207],
    [208,223],
    [224,239],
    [240,255]
  ][value]
}
