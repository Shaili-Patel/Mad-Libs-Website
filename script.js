let userName = prompt('What is your name!?')
let userFriend = prompt('What is your friends name?')
let userFavColor = prompt('What is your favorite color?')
let swallowAirSpeed = prompt('What is the air speed of an unlaiden swallow?')

let myStory = ` <p> Hello ${userName}! You have been invited to the royal ball. along with your friend ${userFriend}</p>
<p>I see you have already answered. so your quest is to ${userQuest}.</p>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory