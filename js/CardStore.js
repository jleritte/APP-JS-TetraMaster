// import { loadCardList } from '../utils/loaders.js'

const stores = new WeakMap(),
  catergories = [
    ["&#xe803;"],
    ["&#xe801;"],
    ["&#xe800;"],
    ["&#xe802;"],
    ["&#xe806;"],
    ["&#xe805;"],
    ["&#xe804;"]
   ]
let masterCardList

export default class CardStore {
  constructor(num) {
    stores.set(this, {
      num,
      cards: []
    })
  }
  get num() { return stores.get(this).num }
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
  get icon() {
    return catergories[masterCardList[cards.get(this).number][5]][0]
  }
  get size() { return stores.get(this).cards.length }
  get card() { return stores.get(this).cards.shift() }
  set card(card) {
    const { cards, num } = stores.get(this)
    if(card.num === num) return cards.push(card)
    console.warn("Card Does not match Store Number")
  }
  toString() { return stores.get(this).cards.join("|") }
}

// const getCardList = async _ => masterCardList = await loadCardList()
// getCardList()
