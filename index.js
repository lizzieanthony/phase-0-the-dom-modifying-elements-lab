// Write your code here!

//const main = document.getElementById('main')
const main = document.querySelector('#main')
//console.log(main); // to find
main.remove()
//document.body.removeChild(main)

const newHeader = document.createElement('h1')
 newHeader.id = 'victory'
 //newHeader.setAttribute('id", 'victory") meh 

newHeader.innerHTML = 'Liz is the champion'