const stores = new WeakMap()

export default class CardStore {
  constructor(num) {
    stores.set(this, {
      num,
      cards: []
    })
  }
  get num() {
    return stores.get(this).num
  }
  get peek() {
    return stores.get(this).cards[0]
  }
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
  get size() {
    return stores.get(this).cards.length
  }
  get card() {
    return stores.get(this).cards.shift()
  }
  set card(card) {
    const { cards, num } = stores.get(this)
    if(card.num === num) return cards.push(card)
    console.warn("Card Does not match Store Number")
  }
  toString() {
    return stores.get(this).cards.join("|")
  }
}
