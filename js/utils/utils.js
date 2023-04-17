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

export function hexToRange(value) {
  return {
    "0":[0,15],
    "1":[16,31],
    "2":[32,47],
    "3":[48,63],
    "4":[64,79],
    "5":[80,95],
    "6":[96,111],
    "7":[112,127],
    "8":[128,143],
    "9":[144,159],
    "A":[160,175],
    "B":[176,191],
    "C":[192,207],
    "D":[208,223],
    "E":[224,239],
    "F":[240,255]
  }[value]
}

export function arrowToBits(num) {
  return num.toString(2),padStart(8,"0").split("").reverse()
}
