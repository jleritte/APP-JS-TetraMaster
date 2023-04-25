import { getValue, getWeighted, toHex } from '../utils/utils.js'
import { loadJSON } from '../utils/loaders.js'

const cards = new WeakMap(),
  types = ["P", "M", "X", "A"],
  catergories = [["b"],["w"],["w"],["s"],["o"],["c"],["u"]],
  statMap = { attack: 1, pdefense: 3, mdefense: 4 },
  promoteOdds = [0.0165, 0.0165, 0.0056, 0]
let masterCardList

export default class Card {
  constructor(card) {
    card = parse(card)
    const number = card?.number ?? card ?? getCardNumber(),
      [_, attackMax, type, pdefenseMax, mdefenseMax] = masterCardList[number]
    card = typeof card === "object" ? card : {
      number,
      type,
      attack: getValue(...hexToRange(attackMax[0])),
      pdefense: getValue(...hexToRange(pdefenseMax[0])),
      mdefense: getValue(...hexToRange(mdefenseMax[0])),
      arrows: getValue(0, 255)
    }
    cards.set(this, card)
  }
  get value() { return toValue(cards.get(this)) }
  get name() { return masterCardList[cards.get(this).number][0] }
  get arrows() { return arrowToBits(cards.get(this).arrows) }
  get type() { return cards.get(this).type }
  get attack() {
    const { attack, type, pdefense, mdefense } = cards.get(this)
    if (type < 3) return attack
    return [attack, pdefense, mdefense].reduce((a, b) => a > b ? a : b)
  }
  get icon() {
    return catergories[masterCardList[cards.get(this).number][5]][0]
  }
  get number() { return cards.get(this).number }
  get promote() {
    const card = cards.get(this),
      stat = ['attack', 'pdefense', 'mdefense'][getValue(0, 2)],
      typeUp = Math.random(),
      maxStat = hexToRange(masterCardList[card.num][statMap[stat][1]])[1]

    this.victor = 0
    card[stat] = card[stat] < maxStat ? card[stat] + 1 : maxStat
    card.type = promoteOdds[card.type] > typeUp
      ? card.type < 2 ? 2 : 3
      : card.type
    return this.value
  }
  get victor() { return cards.get(this).victor ?? 0 }
  set victor(state) { cards.get(this).victor = state }
  getDefense(type) {
    const { attack, pdefense, mdefense } = cards.get(this)
    if (type === 0) return pdefense
    if (type === 1) return mdefense
    if (type === 2) return mdefense > pdefense ? pdefense : mdefense
    if (type === 3) {
      return [attack, pdefense, mdefense].reduce((a, b) => a < b ? a : b)
    }
  }
  toString() {
    const { num, type, attack, pdefense, mdefense, arrows } = cards.get(this)
    return [num, type, attack, pdefense, mdefense, arrows]
      .map(x => toHex(x))
      .join(':')
  }
}

// Card Helper Functions
const parse = cardString => {
  if (typeof cardString === 'number') return cardString
  if (!cardString?.length) return undefined
  const values = cardString.split(':').map(value => parseInt(value, 16))
  return {
    num: values.shift(),
    type: values.shift(),
    attack: values.shift(),
    pdefense: values.shift(),
    mdefense: values.shift(),
    arrows: values
  }
}

const getCardNumber = _ => {
  var weights = [0.6, 0.2, 0.05, 0.05, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01],
    values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return getWeighted(values, weights) * getWeighted(values, weights) - 1
}

const toValue = card => {
  const { attack, type, pdefense, mdefense } = card,
        [nyblAttack, nyblPDefense, nyblMDefense] =
          [attack, pdefense, mdefense].map(value => toHexNybl(value))
  return `${nyblAttack}${types[type]}${nyblPDefense}${nyblMDefense}`
}

const toHexNybl = number => (number >>> 4).toString(16).toUpperCase()

const hexToRange = value => {
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

const arrowToBits = number => number.toString(2).padStart(8,"0").split("")

const getCardList = async _ => {
  masterCardList = await loadJSON('/js/Card/cardList')
}

getCardList()
