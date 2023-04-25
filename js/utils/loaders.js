const loadJSON = url => fetch(`${url}.json`).then(r => r.json())

export { loadJSON }
