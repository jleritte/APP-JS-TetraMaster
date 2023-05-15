import { toHex } from '../utils/utils.js'

const stores = new WeakMap()

export default class CardStore {
  constructor(number, cards, icon) {
    cards = cards.filter(card => card.number === number)
    stores.set(this, { number, cards, icon })
  }
  get number() { return stores.get(this).number }
  get peek() { return stores.get(this).cards[0] }
  get rotateLeft() {
    const { cards } = stores.get(this)
    cards.push(cards.shift())
    return this.peek
  }
  get rotateRight() {
    const { cards } = stores.get(this)
    cards.unshift(cards.pop())
    return this.peek
  }
  get icon() { return stores.get(this).icon }
  get size() { return stores.get(this).cards.length }
  get card() { return stores.get(this).cards.shift() }
  set card(card) {
    const { cards, number } = stores.get(this)
    if(card.number === number) return cards.push(card)
    console.warn("Card Does not match Store Number")
  }
  toString() {
    const store = stores.get(this)
    return `${toHex(this.number)}:${store.cards.join(":")}`
  }
}
