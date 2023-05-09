import Card from './Card/Card.js'
import CardStore from './CardStore.js'

const collections = new WeakMap(),
  maxCards = 100

export default class Collection {
  constructor(cards) {
    collections.set(this, {
      ...generateStores(cards)
    })
  }
  get size() { return collections.get(this).size }
  getStore(num) { return collections.get(this)[num] }
  addCards(cards) {
    const collection = collections.get(this)
    while (cards.length && collection.size < maxCards) {
      const card = cards.shift()
      if (!collection[card.num]) collection[card.num] = new CardStore(card.num)
      collection[card.num].card = card
      collection.size++
    }
    return cards
  }
  getCard(num) {
    const collection = collections.get(this),
      card = collection[num] ? collection[num].card : null
    if (card) {
      collection.size--
      if (!collection[num].size) collection[num] = undefined
    }
    return card
  }
  toString() {
    const stocks = Object.values(collections.get(this))
    stocks.pop()
    return stocks.join(',')
  }
}


// helper functions
function generateStores(cards) {
  cards = cards?.map(c => {
    return c.split("|").map(cs => new Card(cs))
  }).flat() ?? new Array(10).fill(0).map(_ => new Card())
  return cards.reduce((acc, cur) => {
    if (!acc[cur.num]) acc[cur.num] = new CardStore(cur.num)
    acc[cur.num].card = cur
    acc.size++
    return acc
  }, { size: 0 })
}


/**
 * Start cards
 * Zombie, Lizard Man, Sahagin, Fang, Goblin, Flan, Ironite, Goblin, Fang, Bomb,
 * Goblin, Fang, Bomb
 */
