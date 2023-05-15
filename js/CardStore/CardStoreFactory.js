import CardStore from './CardStore.js'

const catergories = [
  "&#xe803;",
  "&#xe801;",
  "&#xe800;",
  "&#xe802;",
  "&#xe806;",
  "&#xe805;",
  "&#xe804;"
]

export default function createCardStoreFactory(masterCardList, cardFactory) {
  const storeFactories = {
    store: storeString => {
      if (!storeString?.length) return new CardStore(-1, [], "")
      const split = storeString.split(':'),
            number = parseInt(split.shift(), 16),
            cards = split.map(value => cardFactory.card(value)),
            icon = catergories[masterCardList[number][5]]
      return new CardStore(number, cards, icon)
    }
  }

  function storeBuilder(number) {
    const icon = catergories[masterCardList[number][5]]
    return new CardStore(+number, [], icon)
  }

  for(const i in masterCardList) {
    const name = masterCardList[i][0].replaceAll(' ', '').toLowerCase()
    Object.defineProperty(storeFactories, name, {get: _ => storeBuilder(i)})
  }

  return storeFactories
}
