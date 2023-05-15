import Player from './Player.js'
/**
 * Start cards
 * bomb, bomb, fang, fang, fang, flan, goblin, goblin, goblin, ironite,
 * lizardman, sahagin, zombie
 */
const startCards = ["bomb", "bomb", "fang", "fang", "fang", "flan", "goblin",
  "goblin", "goblin", "ironite", "lizardman", "sahagin", "zombie"]

export default function createPlayerFactory(masterCardList, factories) {
  const playerFactory = {
          load: id => {
            const saved = (localStorage.getItem(id) ?? "").split('|')
            if(saved.length < 2) return createPlayer()
            const [wins, losses, draws] = saved.shift().split('•'),
                  cards = saved.map(store => factories.stores.store(store))
            return new Player(id, cards, +wins, +losses, +draws)
          }
        }

  function createPlayer() {
    const id = generateId(),
      collection = createEmptyCollection(masterCardList, factories.stores)
    for(const name of startCards) {
      const card = factories.cards[name]
      collection[card.number].card = card
    }
    return new Player(id, collection, 0, 0, 0)
  }

  Object.defineProperty(playerFactory, 'new', {get: createPlayer})


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

function createEmptyCollection(masterCardList, storeFactory) {
  const collection = []
  for(const card of masterCardList) {
    const name = card[0].replaceAll(' ', '').toLowerCase()
    collection.push(storeFactory[name])
  }
  return collection
}
