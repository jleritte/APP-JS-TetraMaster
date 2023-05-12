import Player from './Player.js'
/**
 * Start cards
 * Zombie, Lizard Man, Sahagin, Fang, Goblin, Flan, Ironite, Goblin, Fang, Bomb,
 * Goblin, Fang, Bomb
 */

export default function createPlayerFactory(masterCardList, factories) {
  const playerFactory = {},
        collection = createEmptyCollection(masterCardList, factories.stores)

  function createPlayer(id) {

  }

  Object.defineProperty(playerFactory, 'new', )


  return playerFactory
}

function generateId() {
  let d = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (d + Math.random() * 0xF) % 0xF | 0x0
    d = Math.floor(d / 0xF)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

function createEmptyCollection(masterCardList, stores) {
  const collection = []
  for(const card of masterCardList) {
    const name = card[0].replaceAll(' ', '').toLowerCase()
    collection.push(stores[name])
  }
  return collection
}
