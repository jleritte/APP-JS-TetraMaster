import Card from './Card.js'
import CardStore from './CardStore.js'

const players = new WeakMap(),
  maxCards = 100

export default class Player {
  constructor(id) {
    id = id ?? generateId()
    const player = parse(id)
    players.set(this, player ?? {
      id,
      collection: generateCollection(),
      wins: 0,
      losses: 0,
      draws: 0
    })
  }
  get id() {
    return players.get(this).id
  }
  get collection() {
    return players.get(this).collection
  }
}

// Helper Functions
function parse(id) {
  const saved = localStorage.getItem(id)
  if(!saved) return null
  return {}
}

function generateId() {
  let d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (d + Math.random() * 0xF) % 0xF | 0x0
    d = Math.floor(d / 0xF)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

function generateCollection() {
  const cards = new Array(10).fill(0).map(_ => new Card()),
    stores = cards.reduce((acc, cur) => {
      if(!acc[cur.num]) acc[cur.num] = new CardStore(cur.num)
      acc[cur.num].card = cur
      return acc
    }, {})
  return stores
}
