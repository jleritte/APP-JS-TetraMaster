const local = /localhost|127\.0\.0\.1/.test(window.location) ? "" : 'https://jleritte.github.io/roller/' // Update this to point to correct css url

class Element {
  constructor(parent, type, attributes) {
    const element = document.createElement(type)
    attachAttributes(attributes, element)
    parent.appendChild(element)
    return element
  }
}

function attachAttributes(attributes, element) {
  for(const attribute in attributes) {
    if(attribute === "data") {
      for(const dataAttribute in attributes.data) {
        element.dataset[dataAttribute] = attributes.data[dataAttribute]
      }
    }
    element[attribute] = attributes[attribute]
  }
}

class Div extends Element {
  constructor(parent, attributes = {}) {
    return super(parent, 'div', attributes)
  }
}

export class Card extends Div {
  constructor(parent, onclick, card, color = 'blue', stacked = false) {
    const cardOptions = {
            onclick,
            className: `card ${color}${stacked ? ' stacked':''}`,
            data: {value: card.value}
          },
          htmlCard = super(parent, cardOptions)
    htmlCard.card = card
    for(let bit of card.arrows) {
      let arrow = new Div(htmlCard)
      if(!!+bit) arrow.classList.add("arrow")
    }
    return htmlCard
  }
}

class DOM {
  constructor() {
    if ($$) return $$
    proto = Object.getPrototypeOf(this)
    return copyProto({element: document.firstElementChild})
  }
  query(selector,context = root) {
    return copyProto({element:context.querySelector(selector)})
  }
  // queryAll(selector,context = document) {
  //   return copyProto({element:[...context.querySelectorAll(selector)]})
  // }
  add(content) {
    if(content){
      if(typeof content !== "object") {
        content = this.create(content)
      }
      this.element.appendChild(content.element)
      return this
    }
  }
  remove(content) {
    if(content) {
      this.element.removeChild(content.element)
      return this
    }
  }
  create(content) {
    const node = document.createElement('div')
    node.innerHTML = content
    return copyProto({element: document.importNode(node.firstElementChild,true)})
  }
  css(url) {
    const link = document.createElement('link'),
      after = document.querySelector('title')
    console.log(this.head)
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = local + url
    after.parentNode.insertBefore(link,after)
  }
  icon() {
    const link = document.createElement('link'),
      after = document.querySelector('title')
    link.rel = 'icon'
    link.type = 'image/x-icon'
    link.href = local + 'img/favicon.ico'
    after.parentNode.insertBefore(link,after)
  }
  set text(text) {
    this.element.textContent = text
  }
  set click(handle) {
    this.element.onclick = handle
  }
  set dblclick(handle) {
    this.element.ondblclick = handle
  }
  set value(input) {
    this.element.value = input
  }
  get value() {
    return this.element.value
  }
  get focus() {
    this.element.focus()
    return this
  }
}

function copyProto(newOb) {
  return Object.setPrototypeOf(newOb, proto)
}
