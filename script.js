const cardTemplate = document.querySelector("[card-template]")
const carCardContainer = document.querySelector("[card-card-container]")
const searchInput = document.querySelector("[data-search]")


let cars = []
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    cards.forEach(cards => {
        const isVisible = cards.name.toLowerCase().includes(value) || cards.family.toLowerCase().includes(value)
        cards.element.classList.toggle("hide", !isVisible)
    });
})
fetch('./cards.json')
    .then(response => response.json())
    .then(data => {
      cards = data.map(cards => {
        const card = cardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        const image = card.querySelector("[data-image]")
        header.textContent = cards.name
        body.textContent = cards.family + " - " + cards.type
        image.src = cards.imageurl
        carCardContainer.append(card)
        return { name: cards.name, family: cards.family, type: cards.type, image: cards.imageurl, element: card }
    })
})



