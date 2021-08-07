import { getValue, getWeighted } from './utils/utils.js'
import { masterCardList } from './cardList.js'

const cards = new WeakMap(),
  types = ["P", "M", "X", "A"],
  statMap = { atk: 1, pdef: 3, mdef: 4 },
  promoteOdds = [0.0165, 0.0165, 0.0056, 0]

export default class Card{
  constructor(num) {
    num = num ?? getCardNumber()
    const [name, atkMax, type, pdefMax, mdefMax, icon] = masterCardList[num]
    cards.set(this,{
      num,
      type,
      atk: getValue(0,atkMax),
      pdef: getValue(0,pdefMax),
      mdef: getValue(0,mdefMax),
      arrws: getArrows()
    })
  }
  get value() {
    return toValue(cards.get(this))
  }
  get name() {
    return masterCardList[cards.get(this).num][0]
  }
  get arrows() {
    return cards.get(this).arrws
  }
  get type() {
    return cards.get(this).type
  }
  get attack() {
    const { atk, type, pdef, mdef } = cards.get(this)
    if(type < 3) return atk
    return [atk, pdef, mdef].reduce((a, b) => a > b ? a : b)
  }
  get icon() {
    return masterCardList[cards.get(this).num][5]
  }
  promote() {
    const card = cards.get(this),
      stat = ['atk', 'pdef', 'mdef'][getValue(0, 2)],
      typeUp = Math.random(),
      maxStat = masterCardList[card.num][statMap[stat]]

    card[stat] = card[stat] < maxStat ? card[stat] + 1 : maxStat
    card.type = promoteOdds[card.type] > typeUp
      ? card.type < 2 ? 2 : 3
      : card.type
    return this.value
  }
  getDefense(type) {
    const { atk, pdef, mdef } = cards.get(this)
    if(type === 0) return pdef
    if(type === 1) return mdef
    if(type === 2) return mdef > pdef ? pdef : mdef
    if(type === 3) return [atk, pdef, mdef].reduce((a, b) => a < b ? a : b)
  }

}

// Card Helper Functions
function getCardNumber(){
  var weights = [0.5,0.2,0.1,0.05,0.03,0.03,0.03,0.02,0.02,0.02],
    values = [1,2,3,4,5,6,7,8,9,10]
  return getWeighted(values, weights) * getWeighted(values, weights) - 1
}
function getArrows(){
  return new Array(8).fill(0).map(_ => getValue(0, 1))
}

function toValue(card){
  const { atk, type, pdef, mdef } = card
  return `${toHexNibble(atk)}${types[type]}${toHexNibble(pdef)}${toHexNibble(mdef)}`
}

function toHexNibble(num){
  return (num >>> 4).toString(16)
}

