import { loadJSON } from './utils/loaders.js'
import createCardFactory from './Card/CardFactory.js'
import createCardStoreFactory from './CardStore/CardStoreFactory.js'
import createPlayerFactory from './Player/PlayersFactory.js'


export default async function loadFactories() {
  const masterCardList = await loadJSON('/js/cardList'),
        cards = createCardFactory(masterCardList),
        stores = createCardStoreFactory(masterCardList, cards),
        players = createPlayerFactory(masterCardList, {cards, stores})
  return { cards, stores, players }
}
