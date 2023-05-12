import Card from './Card.js'
import { getValue } from '../utils/utils.js'

export default function createCardFactory(masterCardList) {
  const cardFactories = {
    card: cardString => {
      if (typeof cardString === 'number') return cardString
      if (!cardString?.length) return undefined
      const values = cardString.split('.').map(value => parseInt(value, 16))
      values.unshift(masterCardList[values[0]][0])
      return new Card(...values)
    }
  }

  function cardBuilder(number) {
    const [
      name,
      attackRange,
      type,
      pdefenseRange,
      mdefenseRange
    ] = masterCardList[number],
    attack = getValue(...hexToRange(attackRange[0])),
    pdefense = getValue(...hexToRange(pdefenseRange[0])),
    mdefense = getValue(...hexToRange(mdefenseRange[0])),
    arrows = getValue(0, 255)
    return new Card(name, number, attack, type, pdefense, mdefense, arrows)
  }

  for(const i in masterCardList) {
    const name = masterCardList[i][0].replaceAll(' ', '').toLowerCase()
    Object.defineProperty(cardFactories, name, {get: _ => cardBuilder(i)})
  }

  return cardFactories
}

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
