let menu = document.querySelector('.menu')
fetch('https://api.sampleapis.com/rickandmorty/characters')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <p class="card_name">${item.name}</p>
                <p class="card_type">${item.type}</p>
            </div>
        `
    })
})