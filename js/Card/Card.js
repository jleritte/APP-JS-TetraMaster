import { getValue, toHex } from '../utils/utils.js'

const cards = new WeakMap()

export default class Card {
  constructor(name, number, attack, type, pdefense, mdefense, arrows) {
    cards.set(this, { name, number, attack, type, pdefense, mdefense, arrows })
  }
  get value() { return toValue(cards.get(this)) }
  get name() { return cards.get(this).name }
  get arrowsRaw() { return cards.get(this).arrows }
  get arrows() { return arrowToBits(this.arrowsRaw) }
  get type() { return cards.get(this).type }
  get attack() {
    const { attack, type, pdefense, mdefense } = cards.get(this)
    if (type < 3) return attack
    return [attack, pdefense, mdefense].reduce((a, b) => a > b ? a : b)
  }
  get number() { return cards.get(this).number }
  get statUp() {
    const card = cards.get(this),
      stat = ['attack', 'pdefense', 'mdefense'][getValue(0, 2)],
      statMap = { attack: 1, pdefense: 3, mdefense: 4 },
      maxStat = hexToRange(masterCardList[card.num][statMap[stat][1]])[1]

    card[stat] = card[stat] < maxStat ? card[stat] + 1 : maxStat
    return this.value
  }
  get promote() {
    const card = cards.get(this),
      promoteOdds = [0.015625, 0.015625, 0.0078125, 0],
      typeUp = Math.random()

    card.type = promoteOdds[card.type] > typeUp
      ? card.type < 2 ? 2 : 3
      : card.type
    return this.value
  }
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
    const cardArray = Object.values(cards.get(this))
    return [...cardArray].slice(1).map(x => toHex(x)).join('.')
  }
}

// Card Helper Functions
const toValue = card => {
  const { attack, type, pdefense, mdefense } = card,
        [nyblAttack, nyblPDefense, nyblMDefense] =
          [attack, pdefense, mdefense].map(value => toHexNybl(value)),
        types = ["P", "M", "X", "A"]
  return `${nyblAttack}${types[type]}${nyblPDefense}${nyblMDefense}`
}

const toHexNybl = number => (number >>> 4).toString(16).toUpperCase()

const arrowToBits = number => number.toString(2).padStart(8,"0").split("")
