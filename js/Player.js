import Collection from './Collection.js'

const players = new WeakMap()

// Create Collection class
export default class Player {
  constructor(id) {
    id = id ?? generateId()
    players.set(this, parse(id) ?? {
      id,
      collection: new Collection(),
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
  get gameStats() {
    const { wins, losses, draws } = players.get(this)
    return {wins,losses,draws}
  }
  get lose() {
    return ++players.get(this).losses
  }
  get win() {
    return ++players.get(this).win
  }
  get draw() {
    return ++players.get(this).draws
  }
  toString() {
    const { collection, wins, losses, draws } = players.get(this)
    return [wins,losses,draws,collection].join(',')
  }
}

// Helper Functions
function parse(id) {
  const saved = (localStorage.getItem(id) ?? "").split(',')
  if(saved.length < 2) return null
  return {
    id,
    wins: +saved.shift(),
    losses: +saved.shift(),
    draws: +saved.shift(),
    collection: new Collection(saved)
  }
}

function generateId() {
  let d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (d + Math.random() * 0xF) % 0xF | 0x0
    d = Math.floor(d / 0xF)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

