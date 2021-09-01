//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"

document.querySelector('#company').innerText = "Joe's Bed and Breakfast"

document.querySelector('header > h2').innerText = "Your Mountain Home!"

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to your home in the mountains!"

let message = `Hello ${userName}, welcome to your home in the mountains!`

document.querySelector("#greeting").innerText = message

