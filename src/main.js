const dogRandom = document.querySelector('#random-dog');
const catRandom = document.querySelector('#random-cat');
const surpriseRandom = document.querySelector('#surprise');
const imageSrc = document.querySelector('#image');

const baseRandom = [`https://dog.ceo/api/breeds/image/random`, `https://aws.random.cat/meow`];

window.addEventListener('load', () => {
    dogRandom.addEventListener('click', () => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then((result) => result.json())
            .then((data) => {
                imageSrc.src = data.message
            })
    })
    catRandom.addEventListener('click', () => {
        fetch(`https://cataas.com/api/cats?tags=cute`)
            .then((result) => result.json())
            .then((data) => {
                imageSrc.src = data.id
            })
    })
    surpriseRandom.addEventListener('click', () => {
        fetch(baseRandom[((Math.random() * 2) - 1).toFixed()])
            .then((result) => result.json())
            .then((data) => {
                imageSrc.src = data.message
            })
    })
})