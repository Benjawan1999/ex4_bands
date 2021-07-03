import bands from './bands.json'

import './index.css'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const band = bands.data
    console.log(band);
    
    band.forEach(bandss => {
        let cardDOM = buildCardDOM(bandss)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(bandss) {
    let photos = bands.image_base_url

    return (
        `<div class="cards">
            <img src="${photos.replace(`xxxARTIST-IDxxx`, `${bandss.art_id}`)}" alt="">
            <h2 class="album_title">${bandss.album_title}</h2>
            <h4 class="artist_title">${bandss.artist_title}</h4>
            <P class="genre_text">${bandss.genre_text}</P>
        </div>`
    )
}
