import Collection from './Collection.js'

const players = new WeakMap(),
  MAX_CARDS = 100

export default class Player {
  constructor(id, cards, wins, losses, draws) {
    cards = cards.filter(store => store.number > -1)
    players.set(this, {
      id,
      cards,
      wins: wins || 0,
      losses: losses || 0,
      draws: draws || 0
    })
  }
  get id() { return players.get(this).id }
  get count() { return this.cards.reduce((acc, cur) => acc + cur.size, 0)}
  get cards() { return players.get(this).cards }
  set cards(cards) {
    while(cards.length) {
      if(this.count === MAX_CARDS) break
      const card = cards.shift()
      this.cards[card.number] = card
    }
  }
  get collectorLevel() {
    const arrows = new Set(),
      flexible = [],
      assault = [],
      types = this.cards.reduce((acc, cur) => acc + (cur.size ? 10 : 0), 0)

    for(const card of getAllCards(this.cards)) {
      arrows.add(card.arrowsRaw)
      if(card.type > 2 ) assault.push(1)
      if(card.type === 2) flexible.push(1)
    }
    return types + arrows.size * 5 + flexible.length + assault.length * 2
  }
  get gameStats() {
    const { wins, losses, draws } = players.get(this)
    return {wins,losses,draws}
  }
  get lose() { return ++players.get(this).losses }
  get win() { return ++players.get(this).win }
  get draw() { return ++players.get(this).draws }
  toString() {
    const { cards, wins, losses, draws } = players.get(this),
      gameStats = [wins, losses, draws].join('•')
    return [gameStats, ...cards].join('|')
  }
}

// Helper Functions
function* getAllCards(cards) {
  for(const store of cards) {
    yield* cardsFromStore(store)
  }
}

function* cardsFromStore(store) {
  let size = store.size
  while(size--) {
    yield store.peek
    store.rotateRight
  }
}
