
console.log('Hello Chuck Norris')

const bodyElement = document.getElementById("body")
const textElement = document.getElementById("phrase")
const buttonImg = document.getElementById("chuck-norris")

const chucknorris = 'https://api.chucknorris.io/jokes/random'

//solicitud GET utilizando la API fetch

fetch(chucknorris)
.then((response) => response.json())
.then((json) => {
    console.log(json)
    
    textElement.innerText=json.value
});


const reload = () => {
    location.reload()
}

const messageEnter = (event) => {
    if (event.keyCode == 13 || event.key === "Enter") {
      event.preventDefault()
      buttonImg.click()
    }
    reload
}

const messageSpace = (e) => {
    if (e.keyCode == 32 || e.key === "Space") {
        e.preventDefault()
        buttonImg.click()
      }
      reload
}

buttonImg.addEventListener('click' , reload)
bodyElement.addEventListener('keyup', messageEnter)
bodyElement.addEventListener('keyup', messageSpace)